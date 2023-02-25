import axios from "axios";
import { useState } from "react";
import "./createRecipe.css";
import { useNavigate } from "react-router-dom";



export function CreateRecipe(){
    const [data,setData]  = useState({
        title:"",
        author:"",
        image:"",
        ingredients:"",
        directions:""
    })
    let nav = useNavigate();

    function onsubmitHandle(e){
        e.preventDefault();
        let url = "https://recipe-api-koqp.onrender.com/recipe"
        axios({
            method:"post",
            url:url,
            data:data,
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(res=>{
            nav("/home");
        }).catch(err=>{
            nav("/");
            console.log(err);
        })


    }

    return<div className="create-container">
        <h2>Create a recipe</h2>
    <form onSubmit={onsubmitHandle}>
        <div>
            <p>Title</p>
            <input type={"text"} onChange={(e)=>{setData({...data,title:e.target.value})}}  required />
        </div>
        <div>
        <p>Author</p>
            <input type={"text"} onChange={(e)=>{setData({...data,author:e.target.value})}}  required />
        </div>
        <div>
        <p>imageUrl</p>
            <input type={"text"} onChange={(e)=>{setData({...data,image:e.target.value})}}  required />
        </div>
        <div>
        <p>Ingredients</p>
            <input type={"text"} onChange={(e)=>{setData({...data,ingredients:e.target.value})}}  required />
            <br/>
            <span style={{color:"red"}}>seperate ingredients with comma ","</span>
        </div>
        <div>
        <p>directions</p>
            <input type={"text"} onChange={(e)=>{setData({...data,directions:e.target.value})}}  required />
        </div>
        <button className="btn-crt" >Submit</button>

    </form>
    </div>
}