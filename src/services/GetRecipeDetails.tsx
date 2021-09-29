import axios from "axios";
import recipeDetailsInterface from "../models/recipe";

export default function GetRecipeDetails(
  recipeId: string
): Promise<recipeDetailsInterface> {
  return axios
    .get(`https://api.edamam.com/api/recipes/v2/%23${recipeId}`, {
      params: {
        type: "public",
        app_id: process.env.REACT_APP_RECIPE_ID || "",
        app_key: process.env.REACT_APP_RECIPE_KEY || "",
      },
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
