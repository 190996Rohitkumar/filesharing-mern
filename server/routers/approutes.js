const express=require("express")
const multer=require("multer")
const ShareFileModel = require("../models/ShareFile")
const router=express.Router()

const upload=multer({dest:'uploads'})
router.get("/",(req,res)=>{
    res.send("<h1>hello</h1>")
})

router.post("/upload",upload.single('file'),async(req,res)=>{
    
    const fileobj={
        name:req.file.originalname,
        path:req.file.path
    }
   
    try{
        const result =await ShareFileModel.create(fileobj)
        res.status(200).json({msg:"file uploaded",path:`http://localhost:5500/file/${result._id}`})
    }catch(err){
        console.log(err)
    }
   
})

router.get("/file/:fileid",async(req,res)=>{

    try{
        const result =await ShareFileModel.findById(req.params.fileid)
        result.downloads++
        await result.save()
        res.download(result.path,result.name)
        
    }catch(err){
        console.log(err)
    }
})

module.exports=router