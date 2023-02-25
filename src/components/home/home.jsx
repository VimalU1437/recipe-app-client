import "./home.css";

import{GiKnifeFork} from "react-icons/gi";
import{AiOutlineUser} from "react-icons/ai";
import { useEffect, useState } from "react";
import axios from "axios";
import RecipeDetails from "./recipeDetails/recipeDetails";
import AllRecipe from "./allRecipe/allRecipe";
import { useNavigate } from "react-router-dom";




export default function Home(){
    const [recipe,setRecipe] = useState({});
    const [allRec,setAllRec] =useState([]);
    const [renrec,setRenRec] = useState([...allRec]);
    let nav = useNavigate();

    
    
    useEffect(()=>{
        let url = "https://recipe-api-koqp.onrender.com/recipe";
        axios({
            method:"get",
            url:url,
            headers:{
                Authorization:localStorage.getItem("token")
            }
        }).then(res=>{
            setAllRec(res.data);
            setRenRec(res.data);
        }).catch(err=>{
            nav("/")
            console.log(err);
        })
    },[]);

    return <div>
        <section className="header">
        <div className="logo" onClick={()=>{
            setRecipe({});
        }}>
            <GiKnifeFork/>
            <h1>Recipe App</h1>
        </div>
        <div className="user">
            <AiOutlineUser/>
            <button onClick={()=>{
               localStorage.removeItem("token");
               nav("/")
            }}>Log out</button>

        </div>
        </section>
        <section>
    
            {recipe.title ? <RecipeDetails recipe={recipe} />: <AllRecipe setRecipe={setRecipe} allRec={allRec} renrec={renrec} setRenRec={setRenRec}/>}
        </section>

    </div>
}