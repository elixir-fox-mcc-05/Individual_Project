const {User} = require("../models")
const{generateToken} = require("../helpers/jwt")
const {Decrypt} = require("../helpers/bcrypt")
const axios = require("axios")
class Controller{
    static register(req,res){
        let Data={
            email:req.body.email,
            password:req.body.password
        }

        User.create(Data)
        .then(result=>{
            let payload={
                id:result.id,
                email:result.email
            }
            let token = generateToken(payload)
            res.status(200).json({
                msg:" Success add user",
                id:result.id,
                token:token,
                email:result.email
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
            email:req.currentGmailId,
            password:process.env.SECRET_PASS
        }
      
        
        User.findOne({
            where:{
                email: Data.email
            }
        })
        .then(result=>{
            console.log(Data.password,result.password);            
            let compare = Decrypt(Data.password,result.password)
            console.log(compare);
            
            if(compare){
                let payload={
                    id:result.id,
                    email:result.email
                }
                
                let token = generateToken(payload)
                res.status(201).json({
                    
                    id:result.id,
                    token:token,
                    email:result.email
                })
                
            }
            else{
                res.status(401).json({
                    msg:"email/password not found"
                })
            }
        })
        .catch(err=>{
            
            let Data={
                email:req.currentGmailId,
                password:process.env.SECRET_PASS
            }            
            User.create(Data)
            .then(result=>{
                let payload={
                    id:result.id,
                    email:result.email
                }
                let token = generateToken(payload)
                res.status(200).json({
                    msg:" Success add user",
                    id:result.id,
                    token:token,
                    email:result.email
                })
            })
            .catch(err=>{
                console.log(err);
                
                res.status(400).json({
                    msg:"add user fail",
                    error:err
                })
            })
            
        })

    }

    static login(req,res){
        let Data = {
            email:req.body.email,
            password:req.body.password
        }
        console.log('>>>>>>>>',Data);

        User.findOne({
            where:{
                email: Data.email
            }
        })
        .then(result=>{
            console.log(Data.password,result.password);            
            let compare = Decrypt(Data.password,result.password)
            console.log(compare);
            
            if(compare){
                let payload={
                    id:result.id,
                    email:result.email
                }
                
                let token = generateToken(payload)
                res.status(200).json({                    
                    id:result.id,
                    token:token,
                    email:result.email
                })
                
            }
            else{
                res.status(401).json({
                    msg:"email/password not found"
                })
            }
        })
        .catch(err=>{
            res.status(401).json({
                msg:"email/password not found"
            })
        })

    }
    static viewrandom(req,res){        
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
    static viewall(req,res){        
        axios({
            method: 'GET',
            url: 'https://www.themealdb.com/api/json/v1/1/search.php?s='+req.params.name
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