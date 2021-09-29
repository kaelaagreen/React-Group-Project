import React from "react";
import "./App.css";
import SearchForm from "./components/SearchForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
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
            <Route path="/recipe/favorites" exact>
              <FavoritesList />
            </Route>
            <Route path="/:recipeId" exact>
              <RecipeDetails />
            </Route>
            {/* MAIN PAGE */}
            <Route path="/" exact>
              <SearchForm onSubmit={onSubmit} />

              {/* SEARCH RESULTS */}
              <div>
                <ul>
                  {recipe?.hits.map((hit, index) => {
                    return (
                      <li>
                        <Results
                          recipe={hit.recipe}
                          _links={hit._links}
                          key={index}
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
