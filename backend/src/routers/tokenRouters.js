import tokenController from '../controllers/tokenController.js'
import { Router } from "express";

const tokenRouters = Router();

tokenRouters.post('/tokens',(req, res)=>{
    tokenController.createToken(req, res);
})

tokenRouters.put('/meters/:id',(req, res)=>{
    tokenController.updateToken(req, res);
})

tokenRouters.delete('/meters/:id',(req, res)=>{
    tokenController.deleteToken(req, res);
})

tokenRouters.get('/meters/:id',(req, res)=>{
    tokenController.readTokenById(req, res);
})

tokenRouters.get('/tokens', tokenController.getall);

export default tokenRouters;

