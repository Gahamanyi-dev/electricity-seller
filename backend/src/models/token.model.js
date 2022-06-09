import mongoose from "mongoose";
import pagination from "mongoose-paginate-v2";

const tokenSchema = new mongoose.Schema({
  tokenNumber: {
    type: String,
  },
  status: {
    type: String,
  },
  expiresAt: {
    type: Date,
  }
},{
    timestamps: true
});

tokenSchema.plugin(pagination);
const Meter = mongoose.model("Token",tokenSchema);

export default Meter