import { Link } from "react-router-dom";
import { recipeInterface } from "../models/recipe";

export default function Results({
  label,
  image,
  source,
  url,
  calories,
  totalTime,
  recipeNumber,
}: recipeInterface) {
  return (
    <div className="RecipeBlock RecipeBlock animation">
      <Link to={"/details/" + recipeNumber}>
        <h3>{label}</h3>
        <img src={image} alt="" />
      </Link>
      <p>Source: {source}</p>
      {/* <p>Calories: {calories.toFixed(0)}</p>
        <p>Total time: {totalTime}</p> */}
      <Link
        to={"/favorites"}
        onClick={(event) => {
          //   event?.preventDefault();
          console.log("it clicked");
        }}
      >
        <i className="fas fa-heart"></i>Add To Favorites
      </Link>
    </div>
  );
}
