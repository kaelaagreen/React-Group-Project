import {useState , useEffect } from "react";
import recipe from "../models/recipe";
import GetRecipe from "../services/GetRecipe";
import { Props } from "../services/GetRecipe";



export default function SearchResults(){
    const [recipe, setRecipe] = useState<recipe>();

//all of our data is here
    // useEffect(() => {
    //     //this is where the setQuery should go maybe? 
	// 	GetRecipe({query}:Props).then((data) => {
	// 		setRecipe(data);
	// 	});
	// }, [])

    // const food = React.createContext("chicken")
    return (
        <div>
            <h1>Recipe Details</h1>
            {recipe?.hits.map(food => <p>{food.recipe.label}</p>)}
           </div>
    )
}