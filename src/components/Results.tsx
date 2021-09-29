import { Link } from "react-router-dom";
import { HitsEntity } from "../models/recipe";

export default function Results({ recipe, _links }: HitsEntity) {
  const id = recipe.uri.slice(recipe.uri.indexOf("#") + 1);
  return (
    <div className="RecipeBlock">
      <Link to={id}>
        <img src={recipe.image} alt="" />
        <h3>{recipe.label}</h3>
      </Link>
      <p>Source: {recipe.source}</p>
    </div>
  );
}
