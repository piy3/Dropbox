import mongoose from "mongoose";

const fileSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
    },
    imageurl:[
        {
            type:String,
        }
    ]
},{timestamps:true})

export const File = mongoose.model('File',fileSchema)