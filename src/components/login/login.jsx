import { useState } from "react";
import "./login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export default function Login(){

    const [error,setError] = useState(false);
    const [data,setData] = useState({
        email:"",
        password:""
    })

    let nav = useNavigate();
    function handleSubmit(e){
        e.preventDefault();
        let url = "https://recipe-api-koqp.onrender.com/login";
         axios({
            method:"post",
            url:url,
            data:data
        }).then((res)=>{
            // console.log(res);
            if(res.data.status === "Success"){
                localStorage.setItem("token",res.data.token);
                
                // console.log(localStorage.getItem("token"));
                nav("/home");
            }
        }).catch((err)=>{
            console.log(err);
            setError(true);
        })

    }

    function signupHandle(){
        nav("/signup");
    }
    
    return <div className="login-container">
    <h2>Log in</h2>
        {error && <span style={{color:"red"}}>*Invalid Try again</span>}
    <form onSubmit={handleSubmit}>
        <div className="input-div">
        <h4>Email address</h4>
        <input type={"email"} value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} placeholder="Enter email" required  name="email" />
        </div>
        <div className="input-div">
        <h4>Password</h4>
        <input type={"password"} value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}} name="password" required placeholder="Enter password" />
        </div>
        <button className="log-btn"> Log In</button>
    </form>
    <button className="log-btn" onClick={signupHandle}>Signup</button>
    </div>
}