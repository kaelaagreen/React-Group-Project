import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from "./components/SearchResults"
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import {useState} from "react";
import recipe from './models/recipe';
import GetRecipe from './services/GetRecipe';


function App() {
  const [recipe, setRecipe] = useState<recipe>();

  function onSubmit(query:string){
    GetRecipe(query).then((data) => {
      setRecipe(data);
    });
  }

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/home">
      <SearchForm onSubmit ={onSubmit}/>
      </Route>

      <SearchResults/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
