import mongoose from "mongoose";
const url = "mongodb://localhost:27017/electricitySeller";

mongoose.connect(url, {   useNewUrlParser: true,
    useUnifiedTopology: true})
.then(()=> console.log('database successfully connected'))
.catch(err => console.log('failed to connect to mongodb ',err));

