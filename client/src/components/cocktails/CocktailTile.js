/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import "./CocktailTile.css";
import CocktailPage from "./CocktailPage";
import { useState } from 'react';

export default function CocktailTile({recipe}) {

    const cocktailIngredients = [recipe["strIngredient1"], recipe["strIngredient2"], recipe["strIngredient3"]];
    const instructions = recipe["strInstructions"];
    
    const [showDetails, setShowDetails] = useState(false);

    const startDetailsHandler = () => {
        setShowDetails(true);
    }

    const stopDetailsHandler = () => {
        setShowDetails(false);
    }
    return (

        <div className="recipeTile">
            <div className ="details">
                <img className="recipeTile__img" src={recipe["strDrinkThumb"]} onClick />
                <p className="recipeTile__name" >{recipe["strDrink"]}</p>
            
                {!showDetails && <button onClick={startDetailsHandler}>See Details</button>}
                {showDetails && <CocktailPage onCancel={stopDetailsHandler} cocktailIngredients={cocktailIngredients} instructions={instructions}/>}
            </div>
        </div>
            
    


    );
}