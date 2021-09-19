import { useParams } from "react-router";

interface RouteParams{
    id: string;
}

export default function RecipeDetails({recipe}: any){

    const {id} = useParams<RouteParams>();

    let thisRecipe = recipe?.hits[id]?.recipe;

    return(
        <div>
       
    <img src={thisRecipe?.image}></img>
        </div>
        

        ) 
        
}