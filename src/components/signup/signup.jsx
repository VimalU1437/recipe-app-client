import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";

export default function Signup(){
    const [data,setData] = useState({
        userName:"",
        email:"",
        password:"",
        repeat:"",
        terms:false
    });

    const [passErr,setPassErr] =useState(false);

    const nav = useNavigate();
    function handleSubmit(e){
        e.preventDefault();

        if(data.password !== data.repeat){
            setPassErr(true);
            return;
        }



        let url = "https://recipe-api-koqp.onrender.com/register"
        axios({
            method:"post",
            url:url,
            data:{UserName:data.userName,email:data.email,password:data.password}
        }).then((res)=>{
            nav("/");
        }).catch((err)=>{
            console.log(err);
        })
    }


    return <div className="login-container">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div className="input-div">
                <input type={"text"} value={data.userName} onChange={(e)=>{setData({...data,userName:e.target.value})}} placeholder={"USER NAME"} required/>
            </div>
            <div className="input-div">
                <input type="email" value={data.email} onChange={(e)=>{setData({...data,email:e.target.value})}} placeholder="EMAIL" name="email" required />
            </div>
            <div className="input-div">
            <input type="password" value={data.password} onChange={(e)=>{
                setData({...data,password:e.target.value});
                }} placeholder="PASSWORD" name="password" required />
            </div>
            <div className="input-div"> <input type="password" value={data.repeat} onChange={(e)=>{
                setData({...data,repeat:e.target.value})
                }} placeholder="REPEAT PASSWORD" name="repeatPassword" required />
                </div>
                { passErr && <span style={{color:"red"}}>*Both password are not equal</span>}

            <div className="check-box">

            <input type="checkbox" id="terms" value={data.terms} checked={data.terms} onChange={(e)=>{setData({...data,terms:e.target.checked});}} name="terms" required />
            <label htmlFor="terms">I agree with TERMS&CONDITIONS</label>
            </div>
            <button className="log-btn">Sign Up</button>
        </form>
        <button onClick={()=>{
            nav("/");
        }} className="log-btn">Log In</button>

    </div>
}