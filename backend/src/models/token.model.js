import mongoose from "mongoose";
import { paginate } from "mongoose-paginate-v2";

const tokenSchema= new mongoose.Schema({
    // id , token number,status, days-to-last
    // id        Int     @id @default(autoincrement())
    // token     String  @unique
    // meter     String 
    // amount    Int 
    // status    Boolean

tokenNumber:{
    type:String,
    
},
status:{
    type:String
},
dayLast:{
    type:Number
}


})