'use strict'
const axios = require('axios')
const { User, URL, UserURL } = require('../models')
const { generate_password, compare_password } = require('../helpers/bcrypt')
const { generate_token, decode_data } = require('../helpers/jwt')

class Controller {
    static register(req, res, next) { 
        let { email, password } = req.body

        password = generate_password(password)

        User.create({email, password})
            .then(new_user => {
                if (new_user) {
                    res.status(201).json({ new_user })
                }
            })
            .catch(err => { next(err) })
    }
    
    static login(req, res, next) { 
        let { email, password } = req.body

        
        User.findOne({ where: { email } })
        .then(user => {
            let validation = compare_password(password, user.password)
            if(validation) {
                    let access_token = generate_token(user.dataValues)
                    res.status(200).json({ access_token })
                }
            })
            .catch(err => { next(err) })
    }

    static google_signin(req, res, next) {
        console.log(req.headers.access_token)
        decode_data(req.headers.access_token)
        .then(payload => {
            const { email } = payload
            let newUser = false

            return User.findOne({ where: { email } })
                .then(dataUser => {
                    if(dataUser) {
                        const token = generate_token(dataUser.dataValues)
                        
                        res
                          .status(200)
                          .json({ access_token: token })

                    } else {
                        newUser = true
                        return User.create({ email, password: process.env.DEFAULT_PASSWORD })
                            .then(new_user => {
                                let code = newUser ? 201 : 200

                                const token = gzxenerate_token(new_user.dataValues)
                                res
                                  .status(code)
                                  .json({ access_token: token })
                                })
                            .catch(err => { next(err) })
                    }
                })
                .catch(err => { next(err) })
        })
        .catch(err => { next(err) })
    }

    static search_song(req, res, next) {
        const { artist, song } = req.body
        console.log(req.body)
        axios({
            method: 'GET',
            url: `https://api.lyrics.ovh/v1/${artist}/${song}`
        })
        .then(({data}) => {
            let link = `https://youtube.com/results?search_query=${artist}+${song}`
            URL.create({ link, artist, song })
                .then(new_url => {
                    UserURL.create({ UserId: req.UserId, URLId: new_url.id })
                        .then(new_userurl => {
                            res
                              .status(201)
                              .json({ lyrics: data.lyrics })
                        })
                })
        })
        .catch(err => { next(err) })
    }

    static recent(req, res, next) {
        UserURL.findAll({ where: { UserId: req.UserId }, include: [ URL ] })
            .then(recent => {
                res
                  .status(200)
                  .json({ recent })
            })
            .catch(err => { next(err) })
    }
}

module.exports = Controller