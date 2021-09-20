import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SearchForm from "./components/SearchForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Link
} from "react-router-dom";
import { useState } from "react";
import recipe from "./models/recipe";
import GetRecipe from "./services/GetRecipe";
import RecipeDetails from "./components/RecipeDetails";
import Results from "./components/Results";

function App() {
  const [recipe, setRecipe] = useState<recipe>();

function onSubmit(query: string) {
    GetRecipe(query).then((data) => {
      setRecipe(data);
    });
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          
          <Route path="/details/:id">
            <RecipeDetails recipe={recipe}/>
          </Route>
          {/* MAIN PAGE */}
          <Route path="/">

            <SearchForm onSubmit={onSubmit} />

            {/* SEARCH RESULTS */}
            {recipe?.hits.map((food, index) => {
              return (
                <div>
                  <ul>
                    <li><Link to={"/details/"+ index}>{food.recipe.label}</Link>
                    <Results
										recipeNumber={index}
										key={index}
										label={food.recipe.label}
										image={food.recipe.image}
										source={food.recipe.source}
										url={food.recipe.url}
										calories={food.recipe.calories}
										totalTime={food.recipe.totalTime}
									/></li>
                  </ul>
                </div>
              );
            })}

          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
