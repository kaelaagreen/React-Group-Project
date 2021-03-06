import axios from "axios";
import recipe from "../models/recipe";
import SearchParams from "../models/SearchParams";

//we aren't using our prop in the return.
// export interface Props {
//     query: string;
// }

export default function GetRecipe(searchParams: SearchParams): Promise<recipe> {
  const apiKey = process.env.REACT_APP_RECIPE_API_KEY || "";
  const appId = process.env.REACT_APP_RECIPE_API_ID || "";
  const diet = searchParams.health || undefined;
  // const [newQuery, setNewQuery] = useState("");

  return axios
    .get("https://api.edamam.com/api/recipes/v2", {
      params: {
        type: "public",
        q: searchParams.query,
        health: searchParams.health || undefined,
        app_id: appId,
        app_key: apiKey,
        
      },
    })
    .then((res) => res.data);
}
