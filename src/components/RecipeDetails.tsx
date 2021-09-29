import { recipeDetailsInterface } from "../models/recipe";
import { useContext, useState, useEffect } from "react";
import { Favorites } from "../context/FavoritesProvider";
import GetRecipeDetails from "../services/GetRecipeDetails";
// interface RouteParams {
//   id: string;
// }
//This component RecipeDetails takes a recipe object

export default function RecipeDetails() {
  const [recipeDetails, setRecipeDetails] = useState<recipeDetailsInterface>();
  const id = document.location.pathname.slice(1);
  const fechtedDetails = useEffect(() => {
    GetRecipeDetails(id).then((data) => setRecipeDetails(recipeDetails));
  }, []);
  const { addToFavorites, removeFromFavorites, favoritesList } =
    useContext(Favorites);
  const thisRecipeIsAFavorite: boolean = favoritesList.some(
    (favorite) => favorite.recipe.uri === recipeDetails?.recipe.uri
  );
  return (
    <section>
      <div>
        <h1>Recipe Details</h1>
      </div>
      <div>
        <h3>{recipeDetails?.recipe.label}</h3>
        <img src={recipeDetails?.recipe.image} alt=""></img>
        <a href={recipeDetails?.recipe.url}>
          <p>Original Source: {recipeDetails?.recipe.source}</p>
        </a>
        {thisRecipeIsAFavorite ? (
          <button
            onClick={() => {
              removeFromFavorites(recipeDetails?.recipe.uri!);
            }}
          >
            {" "}
            Remove Favorite{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              console.log(recipeDetails);
              if (recipeDetails) {
                addToFavorites(recipeDetails);
              }
            }}
          >
            Add to Favorites
          </button>
        )}
      </div>
    </section>
  );
}
