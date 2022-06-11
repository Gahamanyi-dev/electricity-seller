import tokenController from '../controllers/tokenController.js'
import { Router } from "express";

const tokenRoutes = Router();


/**
 * @swagger
 * components:
 *   schemas:
 *     Token:
 *       type: object
 *       required:
 *         - meternumber
 *         - money
 *       properties:
 *         meterNumber:
 *           type: string
 *           description: The meter number
 *       example:
 *         meterNumber: string
 */

tokenRoutes.post('/tokens',(req, res)=>{
    tokenController.createToken(req, res);
})

tokenRoutes.put('/tokens/:id',(req, res)=>{
    tokenController.updateToken(req, res);
})

tokenRoutes.delete('/tokens/:id',(req, res)=>{
    tokenController.deleteToken(req, res);
})

tokenRoutes.get('/tokens/:id',(req, res)=>{
    tokenController.readTokenById(req, res);
})

tokenRoutes.get('/tokens', tokenController.getall);

export default tokenRoutes;