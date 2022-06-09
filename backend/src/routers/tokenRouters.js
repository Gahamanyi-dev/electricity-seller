import tokenController from '../controllers/tokenController.js'
import { Router } from "express";

const meterRoutes = Router();

meterRoutes.post('/tokens',(req, res)=>{
    tokenController.createToken(req, res);
})

meterRoutes.put('/meters/:id',(req, res)=>{
    tokenController.updateToken(req, res);
})

meterRoutes.delete('/meters/:id',(req, res)=>{
    tokenController.deleteToken(req, res);
})

meterRoutes.get('/meters/:id',(req, res)=>{
    tokenController.readTokenById(req, res);
})

meterRoutes.get('/tokens', tokenController.getall);

export default meterRoutes;