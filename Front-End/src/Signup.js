
import { useState } from "react"
import "./Signup.css"
import axios from "axios"
export default function Signup(){
    const[first_name,setFirstName]=useState("")
    const[last_name,setLastName]=useState("")
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    function handleclick(){
        console.log("working")
        let url = "http://localhost:8000/signup_connection";
        let request={first_name:first_name,last_name:last_name,email:email,passwd:password};
        let header={}
        console.log(request)
        axios.post(url,request,header).then((res)=>{
            console.log(res.data)
        }).catch()
    }
    return<>
    <div className = "signup_main">
        <div className="signup_inner">
            <label>First Name</label>
            <input type = "text" placeholder="First Name" onChange={(e)=>{setFirstName(e.target.value)}}/>
            <label>Last name</label>
            <input type = "text" placeholder="Last Name" onChange={(e)=>{setLastName(e.target.value)}}/>
            <label>Email</label>
            <input type = "text" placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/>
            <label>Password</label>
            <input type = "password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
            <button onClick={handleclick}>Sign up</button>
        </div>
    </div>
    </>
}