import { useParams } from "react-router";

interface RouteParams {
  id: string;
}

export default function RecipeDetails({ recipe }: any) {
  const { id } = useParams<RouteParams>();

  let thisRecipe = recipe?.hits[id]?.recipe;
  let recipeIngredientsList = recipe?.hits[id]?.recipe?.ingredientLines;
  return (
    <section>
      <div>
        <h1>Recipe Details: {thisRecipe?.label}</h1>
      </div>
      <div>
        
        <img src={thisRecipe?.image} alt=""></img>
        <p>Calories: {Math.floor(thisRecipe?.calories)}</p>
      <p>Original Source: {thisRecipe?.source}</p>


    <ul>

        {recipeIngredientsList.map((item: string) =>{
          
          return(
            <li>{item}</li>
          )
        })}
    </ul>
        
        
      </div>
    </section>
  );
}
