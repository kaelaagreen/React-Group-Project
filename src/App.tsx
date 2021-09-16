import React from 'react';
import logo from './logo.svg';
import './App.css';
import SearchForm from './components/SearchForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchResults from "./components/SearchResults"


function App() {
  return (
    <div className="App">
      <SearchForm/>
      <SearchResults/>
    </div>
  );
}

export default App;
