const mongoose=require("mongoose")

const ShareFileSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    path:{
        type:String,
        required:true
    },
    downloads:{
        type:Number,
        default:0
    }
})

const ShareFileModel=new mongoose.model("ShareFile",ShareFileSchema)

module.exports=ShareFileModel