import { useParams } from "react-router";

interface RouteParams {
  id: string;
}

export default function RecipeDetails({ recipe }: any) {
  const { id } = useParams<RouteParams>();

  let thisRecipe = recipe?.hits[id]?.recipe;

  return (
    <section>
      <div>
        <h1>Recipe Details</h1>
      </div>
      <div>
        <h3>{thisRecipe?.label}</h3>
        <img src={thisRecipe?.image} alt=""></img>
        <a href={thisRecipe?.url}>
          <p>Original Source: {thisRecipe?.source}</p>
        </a>
      </div>
    </section>
  );
}
