import { useState } from "react"
import "./Login.css"
import axios from "axios"

export default function Login(){
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    function handleclick(){
       
        let url="http://localhost:7000/login";
        let request={uusername:name,upasswd:password};
        let header={}

        axios.post(url,request,header).then((res)=>{
            console.log(res.data)


        }).catch()
    }

    return<>
     <div className="login_main">
        <div className="login_inner">
        <label>Username</label>
        <input type="text" placeholder="Username" onChange={(e)=>{setName(e.target.value)}}/>{name}
        <label>Password</label>
        <input type="text" placeholder="Password"onChange={(e)=>{setPassword(e.target.value)}}/>{password}
        <button onClick={handleclick}>Login</button>
            </div>
    </div>
    </>
   
}
