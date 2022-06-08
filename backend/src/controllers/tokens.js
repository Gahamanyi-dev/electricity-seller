import Token from "../models/token.model"
import express from "express";
import Joi from "joi"
const Schema=Joi.object().keys({
    token:Joi.max(9).min(9),
    meter:Joi.max(6).min(6) 
})


const tokenController={
async createToken(req,res){
let[meter,amount]= req.body

if(!meter||!amount){ res.send("you must fill all fields")}



},

async getall(req,res){
    Token.findAll()
    .then((tokens)=>res.send({
        success:true,
        message:null,
        data:tokens
    }))
    .catch(err=>res.send(err))
}

}

export default tokenController;