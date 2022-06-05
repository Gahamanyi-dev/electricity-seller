import  Meter  from "../models/meters.model.js";

const meterController = {


async addMeter(req, res){
    let meter = new Meter();
    meter.meterNumber = req.body.meterNumber;
    await meter.save()
    .then(meterSaved => res.send(meterSaved).status(201))
    .catch(err => res.send(err).status(400))
},

async readMeters(req, res){
  await  Meter.find()
    .then(allMeters =>res.send(allMeters).status(201))
    .catch(err => res.send(err).status(400))
},

async readMeter(req, res){
   await Meter.findById(req.params.id)
    .then(meter => res.send(meter).status(201))
    .catch(err => res.send(err).status(400))
},

async updateMeter(req, res){
  console.log(req.params.id);
  await  Meter.findByIdAndUpdate({_id: req.params.id},req.body,{new:true})
    .then(updatedMeter=> res.send(updatedMeter).status(201))
    .catch(err => res.send(err).status(400))
},

async deleteMeter(req, res){
   await Meter.findOneAndRemove(req.params.id)
    .then(deletedMeter=> res.send(deletedMeter).status(201))
    .catch(err => res.send(err).status(400))
}
}
export default meterController;