import mongoose from "mongoose";
import pagination from "mongoose-paginate-v2";

const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }
},{
    timestamps: true
});

userSchema.plugin(pagination);
const User = mongoose.model("User",userSchema);

export default User;