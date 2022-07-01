import authController from "../controllers/authController.js";
import { Router } from "express";

const authRouter = Router();
/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
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
   *        parameters:
   *        - in: body
   *          name: User cerdentials
   *          schema:
   *            $ref: '#/definitions/userCerdentials'
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