import './cocktails.css';
import Axios from "axios";
import { useState } from "react";
import CocktailTile from "./CocktailTile";


function Cocktail() {
  const [query, setquery] = useState("");  
  const [recipes, setrecipes] =useState([]);
  //const [healthLabel, setHealthLabel] = useState("");


  //const YOUR_APP_ID = "eff0de92";
  //const YOUR_APP_KEY = "52c8e7fde509c5c4403dface7fe6c1d7";
  var url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`;

  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.drinks);
    console.log(result.data.drinks);
  
  };
  

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();

  }

  return (
    <div className = "app">
      <h1 onClick ={getRecipes}>Cocktails</h1>
      <form className="app_searchForm" onSubmit={onSubmit}>
        <input 
          type="text" 
          className="app__input"
          placeholder="enter ingredient" 
          value={query} 
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />

      </form>

      <div className="app__recipes">
        {recipes.map((recipe) => {
          return <CocktailTile recipe={recipe}></CocktailTile>;
        })}
      </div>
    </div>
  );
}

export default Cocktail;