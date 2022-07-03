import userController from '../controllers/userController.js';
import { Router } from "express";

const userRouters = Router();

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: the Users management API
 */

  /**
   * @swagger
   * /users:
   *    post:
   *        tags: [Users]
   *        description: This API for authenticate users by typing email and password
   *        consumes:
   *        - application/json
   *        produces:
   *        - application/json
   *        requestBody:   
   *           required: true
   *           content:
   *             application/json:
   *                schema:
   *                   $ref: '#/components/schemas/User'
   *        responses:
   *            200:
   *                description: everything is ok
   *            400:
   *                description: bad request
   *            500:
   *                description: internal server error
   * definitions:
   *     userCerdentials:
   *        type: object
   *        required:
   *        - first_name
   *        - last_name
   *        - email
   *        - password
   *        properties:
   *            first_name:
   *                    type: string
   *                    example: bwiza
   *            last_name:
   *                    type: string
   *                    example: ahmed
   *            email:
   *                    type: string
   *                    example: ahmed@gamil.com
   *            password:
   *                    type: string
   *                    example: 1234
   */
  
userRouters.post("/users", (req, res) => {
    userController.createUser(req, res);
});

  /**
   * @swagger
   * /users/{id}:
   *  put:
   *    summary: Update the meter by the id
   *    parameters:
   *      - in: path
   *        name: id
   *        schema:
   *          type: string
   *        required: true
   *        description: The user id
   *    tags: [Users]
   *    requestBody:
   *      required: true
   *      content:
   *        application/json:
   *          schema:
   *            $ref: '#/components/schemas/User'
   *        responses:
   *            200:
   *                description: everything is ok
   *            400:
   *                description: bad request
   *            500:
   *                description: internal server error
   * definitions:
   *     userCerdentials:
   *        type: object
   *        required:
   *        - first_name
   *        - last_name
   *        - email
   *        - password
   *        properties:
   *            first_name:
   *                    type: string
   *                    example: bwiza
   *            last_name:
   *                    type: string
   *                    example: ahmed
   *            email:
   *                    type: string
   *                    example: ahmed@gamil.com
   *            password:
   *                    type: string
   *                    example: 1234
   * 
   */
userRouters.put("/users/:id", (req, res)=>{
    userController.updateUser(req, res);
});

/**
 * @swagger
 * /meters/{id}:
 *   delete:
 *     summary: Remove the meter by id
 *     tags: [Meters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The user id
 *         responses:
 *            200:
 *                description: everything is ok
 *            400:
 *                description: bad request
 *            500:
 *                description: internal server error
 */
userRouters.delete("/users/:id", (req, res)=>{
    userController.deleteUser(req, res);
});

export default userRouters;