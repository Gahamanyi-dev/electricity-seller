import authController from "../controllers/authController.js";
import { Router } from "express";

const authRouter = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - first_name
 *         - last_name
 *         - email
 *         - password
 *       properties:
 *         first_name:
 *           type: string
 *           description: user first name
 *         last_name:
 *           type: string
 *           description: user last name
 *         email:
 *           type: string
 *           description: user email
 *         password:
 *           type: string
 *           description: user password
 *       example:
 *         first_name: string
 *         last_name: string
 *         email: string
 *         password: string
 *     Auth:
 *       type: object
 *       required:
 *         - email
 *         - password
 *       properties:
 *         email:
 *           type: string
 *           description: user email
 *         password:
 *           type: string
 *           description: user password
 *       example:
 *         email: string
 *         password: string
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: the Users management API
 */

  /**
   * @swagger
   * /auth/login:
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
   *                   $ref: '#/components/schemas/Auth'
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
   *        - email
   *        - password
   *        properties:
   *            email:
   *                    type: string
   *                    example: ahmed@gamil.com
   *            password:
   *                    type: string
   *                    example: 1234
   */
authRouter.post("/auth/login", authController.login);

export default authRouter;