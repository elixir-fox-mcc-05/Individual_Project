const {User} = require("../models")
const{generateToken} = require("../helpers/jwt")
const axios = require("axios")
class Controller{
    static register(req,res){
        let Data={
            username:req.body.username,
            email:req.body.email,
            password:req.body.password
        }

        User.create(Data)
        .then(result=>{
            let payload={
                id:result.id,
                username:result.username
            }
            let token = generateToken(payload)
            res.status(200).json({
                msg:" Success add user",
                id:result.id,
                token:token,
                username:result.username
            })
        })
        .catch(err=>{
            res.status(400).json({
                msg:"add user fail",
                error:err
            })
        })
    }
    static loginGmail(req,res){       
        
        let Data = {
            username:req.currentGmailId,
            password:process.env.SECRET_PASS
        }
        console.log('>>>>>>>>',Data);
        
        User.findOne({
            where:{
                username: Data.username
            }
        })
        .then(result=>{
            console.log(Data.password,result.password);            
            let compare = Decrypt(Data.password,result.password)
            console.log(compare);
            
            if(compare){
                let payload={
                    id:result.id,
                    username:result.username
                }
                
                let token = generateToken(payload)
                res.status(201).json({
                    
                    id:result.id,
                    token:token,
                    username:result.username
                })
                
            }
            else{
                res.status(401).json({
                    msg:"username/password not found"
                })
            }
        })
        .catch(err=>{
            let Data={
                username:req.currentGmailId,
                email:req.currentGmailId,
                password:process.env.SECRET_PASS
            }            
            User.create(Data)
            .then(result=>{
                let payload={
                    id:result.id,
                    username:result.username
                }
                let token = generateToken(payload)
                res.status(200).json({
                    msg:" Success add user",
                    id:result.id,
                    token:token,
                    username:result.email
                })
            })
            .catch(err=>{
                res.status(400).json({
                    msg:"add user fail",
                    error:err
                })
            })
            
        })

    }

    static login(req,res){
        let Data = {
            username:req.body.username,
            password:req.body.password
        }

        User.findOne({
            where:{
                username: Data.username
            }
        })
        .then(result=>{
            console.log(Data.password,result.password);            
            let compare = Decrypt(Data.password,result.password)
            console.log(compare);
            
            if(compare){
                let payload={
                    id:result.id,
                    username:result.username
                }
                
                let token = generateToken(payload)
                res.status(200).json({                    
                    id:result.id,
                    token:token,
                    username:result.username
                })
                
            }
            else{
                res.status(401).json({
                    msg:"username/password not found"
                })
            }
        })
        .catch(err=>{
            res.status(401).json({
                msg:"username/password not found"
            })
        })

    }
    static viewall(req,res){        
        axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/random.php'
          })
        .then(result=>{
            console.log(result.data);
            
            return res.status(200).json({
                msg:"find random success",
                data:result.data
            })
        })
        .catch(err=>{
            console.log(err);            
            return res.status(400).json({
                msg:"find random fail",
                data:err
            })
        })

    }
}
module.exports = Controller