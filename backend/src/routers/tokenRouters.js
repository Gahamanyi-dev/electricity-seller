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
 *         - amount
 *       properties:
 *         meterNumber:
 *           type: string
 *           description: The meter number
 *         amount:
 *            type: number
 *            description: money paid
 *       example:
 *         meterNumber: string
 *         amount: number
 *         
 */

/**
 * @swagger
 * tags:
 *  name: Tokens
 *  description: the Token management API
 */


/**
 * @swagger
 * /tokens:
 *   post:
 *     summary: Create a new token
 *     tags: [Tokens]
 *     requestBody:   
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Token'
 *     responses:
 *       200:
 *         description: The token was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Token'
 *       500:
 *         description: Some server error
 * 
 */
tokenRoutes.post('/tokens',(req, res)=>{
    tokenController.createToken(req, res);
})







/**
 * @swagger
 * /tokens/{id}:
 *   get:
 *     summary: Get the token by id
 *     tags: [Tokens]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The token id
 *     responses:
 *       200:
 *         description: The token description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Token'
 *       404:
 *         description: The token was not found
 */

tokenRoutes.get('/tokens/:id',(req, res)=>{
    tokenController.readTokenById(req, res);
})


/**
 * @swagger
 * /tokens:
 *  get:
 *    summary: get all tokens
 *    tags: [Tokens]
 *    responses:
 *      200:
 *        description: for all tokens
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *              $ref: '#/components/schemas/Token'
 */
tokenRoutes.get('/tokens', tokenController.getall);



/**
 * @swagger
 * /tokens/{id}:
 *  put:
 *    summary: Update the token by the id
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The token id
 *    tags: [Tokens]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Token'
 *    responses:
 *      200:
 *        description: The token was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Token'
 *      404:
 *        description: The token was not found
 *      500:
 *        description: Some error happened
 */
tokenRoutes.put('/tokens/:id',(req, res)=>{
    tokenController.updateToken(req, res);
})

/**
 * @swagger
 * /tokens/{id}:
 *   delete:
 *     summary: Remove the token by id
 *     tags: [Tokens]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The token id
 *
 *     responses:
 *       200:
 *         description: The token was deleted
 *       404:
 *         description: The token was not found
 */
 tokenRoutes.delete('/tokens/:id',(req, res)=>{
    tokenController.deleteToken(req, res);
})

export default tokenRoutes;
