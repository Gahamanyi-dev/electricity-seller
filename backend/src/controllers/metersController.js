import Meter from "../models/meters.model.js";

const meterController = {
  async addMeter(req, res) {
    let meter = new Meter();
    meter.meterNumber = req.body.meterNumber;
    await meter
      .save()
      .then((meterSaved) =>
        res
          .send({
            success: true,
            message: "meter added successful",
            data: meterSaved,
          })
          .status(201)
      )
      .catch((err) => res.send({
        success: false,
        message: "Adding meter failed",
        data: null
      }).status(400));
  },

  async readMeters(req, res) {
    await Meter.find()
      .then((allMeters) =>
        res
          .send({
            success: true,
            message: 'Get all meters successful',
            data: allMeters
          })
          .status(201)
      )
      .catch((err) => res.send({
        success: false,
        message: 'Failed to get all meters',
        data: null
      }).status(400));
  },

  async readMeter(req, res) {
    await Meter.findById(req.params.id)
      .then((meter) => res.send({
        success: true,
        message: 'Get meter successful',
        data: meter
      }).status(201))
      .catch((err) => res.send({
        success: false,
        message: 'Get meter Failed',
        data: null
      }).status(400));
  },

  async updateMeter(req, res) {
    console.log(req.params.id);
    await Meter.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((updatedMeter) => res.send({
        success: true,
        message: 'Update meter successful',
        data: updatedMeter
      }).status(201))
      .catch((err) => res.send({
        success: false,
        message: 'Update meter failed',
        data: null
      }).status(400));
  },

  async deleteMeter(req, res) {
    await Meter.findOneAndRemove(req.params.id)
      .then((deletedMeter) => res.send({
        success: true,
        message: 'Delete meter successfull',
        data: deletedMeter
      }).status(201))
      .catch((err) => res.send({
        success: false,
        message: 'Delete meter failed',
        data: null
      }).status(400));
  },
};
export default meterController;
