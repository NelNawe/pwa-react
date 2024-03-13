import React from 'react';
import logo from './logo.svg';
import './App.css';
import Recipe  from './components/recette.js';
import SearchForm from './components/recherche.js';

function App() {
  return (
    <div className="App">
      <Recipe/>
      <SearchForm/>
    </div>
  );
}

export default App;
