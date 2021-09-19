import {useState} from "react";

export default function SearchForm({
  onSubmit,
}: {
  onSubmit: (query: string) => void;
}) {
  const [query, setQuery] = useState<string>("");

  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log(query);
          onSubmit(query);
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

        <label>
          <input
            type="radio"
            id="dairyFree"
            name="filteredFoods"
            value="Dairy-Free"
          />
          Dairy Free
        </label>
      </form>

      <button type="submit"> Search</button>
    </div>
  );
}
