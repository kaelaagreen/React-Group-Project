
import { Link } from "react-router-dom";
import { recipeInterface } from "../models/recipe";

export default function Results({label,image,source,url, calories, totalTime, recipeNumber}: recipeInterface) {
    return (
    <div>
        <Link to={"/" + recipeNumber}>
            <img src={image}/>
        </Link>
        <h3>{label}</h3>
        <p>Source: {source}</p>
        <a href={url}>Link</a>
        <p>Calories: {calories.toFixed(0)}</p>
        <p>Total time: {totalTime}</p>
    </div>
    )
}