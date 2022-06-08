// import { addMeter,updateMeter,readMeter,readMeters,deleteMeter } from "../controllers/metersController";

import meterController from '../controllers/metersController.js'
import { Router } from "express";

const meterRoutes = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Meter:
 *       type: object
 *       required:
 *         - meternumber
 *       properties:
 *         meterNumber:
 *           type: string
 *           description: The meter number
 *       example:
 *         meterNumber: string
 */

/**
 * @swagger
 * tags:
 *  name: Meters
 *  description: the Meter management API
 */


/**
 * @swagger
 * /meters:
 *   post:
 *     summary: Create a new meter
 *     tags: [Meters]
 *     requestBody:   
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Meter'
 *     responses:
 *       200:
 *         description: The meter was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meter'
 *       500:
 *         description: Some server error
 */


meterRoutes.post('/meters',(req, res)=>{
    meterController.addMeter(req, res);
})


/**
 * @swagger
 * /meters/{id}:
 *  put:
 *    summary: Update the meter by the id
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The user id
 *    tags: [Meters]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Meter'
 *    responses:
 *      200:
 *        description: The meter was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Meter'
 *      404:
 *        description: The meter was not found
 *      500:
 *        description: Some error happened
 */
meterRoutes.put('/meters/:id',(req, res)=>{
    meterController.updateMeter(req, res);
})

/**
 * @swagger
 * /meters:
 *  get:
 *    summary: get all meters
 *    tags: [Meters]
 *    responses:
 *      200:
 *        description: The meter was updated
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *              $ref: '#/components/schemas/Meter'
 */
meterRoutes.get('/meters', meterController.readMeters);

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
 *
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */


meterRoutes.delete('/meters/:id',(req, res)=>{
    meterController.deleteMeter(req, res);
})


/**
 * @swagger
 * /meters/{id}:
 *   get:
 *     summary: Get the meter by id
 *     tags: [Meters]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The meter id
 *     responses:
 *       200:
 *         description: The meter description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Meter'
 *       404:
 *         description: The meter was not found
 */


meterRoutes.get('/meters/:id',(req, res)=>{
    meterController.readMeter(req, res);
})

export default meterRoutes;