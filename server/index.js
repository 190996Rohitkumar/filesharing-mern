const express=require("express")
const dotenv=require("dotenv")
const router=require("./routers/approutes")
const cors=require("cors")
const mongoose=require("mongoose")
try{
    mongoose.connect("mongodb://127.0.0.1:27017/filesharing")
}catch(e){
    console.log(e)
}

const app=express()
dotenv.config()
app.use(cors())
app.use(router)
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.listen(process.env.PORT,()=>{
    console.log(` the server is running on ${process.env.PORT}`)
})