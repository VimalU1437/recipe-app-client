import { useState } from "react";
import "./allRecipe.css";
import {MdOutlineFoodBank} from "react-icons/md";
import { useNavigate } from "react-router-dom";



export default function AllRecipe({setRecipe,allRec,renrec,setRenRec}){
    const nav = useNavigate()
    const [input,setInput] = useState("");
    function handleOnchange(e){
        setInput(e.target.value);
        setRenRec(()=>{
            let temp = [...allRec];
            temp = temp.filter(elm=>{
                return elm.title.includes(input);
            })
            return temp;
        })

    }
    function onclickHandle(id){

        setRecipe(()=>{
            let temp = [...allRec];
            temp = temp.find(elm=>{
                return elm._id === id
            });
            console.log(temp);
            return temp;
        })

    }

    return<div>
        <div className="search">
            <input type={"text"} placeholder={"search product"} value={input} onChange={handleOnchange} />
        </div>
        <section onClick={()=>{
            nav("/newRecipe");
        }} className="addNew">
        <MdOutlineFoodBank />
        Addnew
        </section>

        <div className="image-container">

        {renrec.map((elm)=>{
            return<div  onClick={()=>{
                onclickHandle(elm._id)}} key={elm._id} >
                <img src={elm.image.url} alt="food" />
                <p>{elm.title}</p>
                <p>{elm.author}</p>
            </div>
        })}
        </div>
    </div>
}