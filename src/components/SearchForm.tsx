import { useState } from "react";
import SearchParams from "../models/SearchParams";

export default function SearchForm({
  onSubmit,
}: {
  onSubmit: (searchParams: SearchParams) => void;
}) {
  const [query, setQuery] = useState<string>("");
  const [health, setHealth] = useState("");
  return (
    <div className="search">
      <h1 className="pageHeader">Recipe Router</h1>
      <p></p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          document.querySelectorAll(".animation").forEach((recipeBlock)=>{
            recipeBlock.classList.remove("animation")
            setTimeout(() =>{
                recipeBlock.classList.add("animation")
                
            }, 500 )
        })

          console.log(query);
          onSubmit({ query, health });
          setQuery("");
        }}
      >
        <label> Search </label>
        <input
          type="text"
          placeholder="Search Recipes"
          onChange={(event) => {
            setQuery(event.target.value);
          }}
          value={query}
        />
        <br /><br />
        <label htmlFor="health">
          {/* {" "} */}
          Health:
          <select
            name="health"
            id="health"
            onChange={(event) => {
              console.log(event.target.value);
              setHealth(event.target.value);
            }}
          >
            <option value="" defaultChecked>
              optional
            </option>
            <option value="alcohol-free">alcohol free</option>
            <option value="dairy-free">dairy free</option>
            <option value="egg-free">egg free</option>
            <option value="fish-free">fish free</option>
            <option value="fodmap-free">fodmap free</option>
            <option value="gluten-free">gluten free</option>
          </select>
        </label>
        <button type="submit"> Search</button>
      </form>
    </div>
  );
}
