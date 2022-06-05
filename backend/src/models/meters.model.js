import mongoose from "mongoose";
import pagination from "mongoose-paginate-v2";

const meterSchema =new mongoose.Schema({
    meterNumber: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
});

meterSchema.plugin(pagination);
const Meter = mongoose.model("Meter",meterSchema);

export default Meter