import { useEffect, useRef, useState } from "react";
import axios from "axios"
import API from "./Api";

function App() {
  const img="https://i.pinimg.com/originals/16/46/24/1646243661201a0892cc4b1a64fcbacf.jpg"
  const [file,setfile]=useState('')
  const [downloadlink,setdownloadlink]=useState('')
 
  const fileinputref=useRef()
  useEffect(()=>{
    
    const uploadfile=async()=>{
      if(file){
        console.log(file)
        const fd=new FormData()
        fd.append("name",file.name)
        fd.append("file",file)
        const result=await axios.post(API.UPLOAD_URL,fd)
        setdownloadlink(result.data.path)
      }
    }
    uploadfile()
  },[file])
  return (
    <div className="container">
        <div className="left-side">
          <img src={img} alt="img" />
        </div>
        <div className="right-side">
            <div className="form-container">
                <h1>File Sharing App(MERN)</h1>
                <h3>Just Select & Share any file with anyone </h3>
                <button onClick={()=>{fileinputref.current.click()}}>Upload file</button>
                <input type="file" ref={fileinputref} onChange={(e)=>{setfile(e.target.files[0])}}/>
                {downloadlink?<><a href={downloadlink}>{downloadlink}</a><span>* Copy above Link & share with your friends *</span></>:''}
                
            </div>
        </div>
    </div>
  );
}

export default App;
