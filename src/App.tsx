import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import { useState } from "react";
import recipe from "./models/recipe";
import GetRecipe from "./services/GetRecipe";
import RecipeDetails from "./components/RecipeDetails";
import Results from "./components/Results";
import SearchParams from "./models/SearchParams";
import FavoritesProvider from "./context/FavoritesProvider";
import FavoritesList from "./components/FavoritesList";
function App() {
  const [recipe, setRecipe] = useState<recipe>();

  function onSubmit(searchParams: SearchParams) {
    GetRecipe(searchParams).then((data) => {
      setRecipe(data);
    });
  }

  return (
    <div className="App">
      <Router>
        <NavLink to="/" exact>
          Home
        </NavLink>
        <NavLink to="/recipe/favorites" exact>
          Favorites
        </NavLink>
        <Switch>
          <FavoritesProvider>
            <Route path="recipe/favorites" exact>
              <FavoritesList />
            </Route>
            <Route path="/details/:id">
              <RecipeDetails />
            </Route>
            {/* MAIN PAGE */}
            <Route path="/">
              <SearchForm onSubmit={onSubmit} />

              {/* SEARCH RESULTS */}
              <div>
                <ul>
                  {recipe?.hits.map((food, index) => {
                    return (
                      <li>
                        <Results
                          recipeNumber={index}
                          key={index}
                          label={food.recipe.label}
                          image={food.recipe.image}
                          source={food.recipe.source}
                          url={food.recipe.url}
                          calories={food.recipe.calories}
                          totalTime={food.recipe.totalTime}
                          uri={food.recipe.uri}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Route>
          </FavoritesProvider>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
