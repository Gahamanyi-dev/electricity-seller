// import { addMeter,updateMeter,readMeter,readMeters,deleteMeter } from "../controllers/metersController";

import meterController from '../controllers/metersController.js'
import { Router } from "express";

const meterRoutes = Router();

meterRoutes.post('/meter',(req, res)=>{
    meterController.addMeter(req, res);
})

meterRoutes.put('/meter/:id',(req, res)=>{
    meterController.updateMeter(req, res);
})

meterRoutes.get('/meter', meterController.readMeters);

meterRoutes.delete('/meter/:id',(req, res)=>{
    meterController.deleteMeter(req, res);
})

meterRoutes.get('/meter/:id',(req, res)=>{
    meterController.readMeter(req, res);
})

export default meterRoutes;