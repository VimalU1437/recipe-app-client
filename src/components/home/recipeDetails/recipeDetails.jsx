import { useState } from "react";
import "./recipeDetails.css";

export default function RecipeDetails({recipe}){

    const [inge,setIng] = useState(true);

    return<div className="rec-container">
        <img className="img" src={recipe.image.url} alt="food" />
        <div className="container-btn">

        <div>
            <button
            
            onClick={(e)=>{
                setIng(true);
            }}>
            Ingredients
            </button>
            <button
             onClick={(e)=>{
                 setIng(false);
                }}>
            Directions
            </button>
        </div>
        <ol>
        {inge ? recipe.ingredients.map((elm,i)=>{
            return<li key={i}>{elm}</li>
        }):
        <p>
            {recipe.directions}
        </p>
        }
        </ol>
        </div>
    </div> 
}