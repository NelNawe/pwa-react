import React, { Component } from 'react';
import axios from 'axios';

class Recipe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: null,
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    // Effectuer une requête pour récupérer une recette depuis l'API TheMealDB
    axios.get('https://www.themealdb.com/api/json/v1/1/random.php')
      .then(response => {
        this.setState({
          recipe: response.data.meals[0],
          loading: false
        });
      })
      .catch(error => {
        this.setState({
          error: error,
          loading: false
        });
      });
  }

  render() {
    const { recipe, loading, error } = this.state;

    if (loading) {
      return <div>Chargement en cours...</div>;
    }

    if (error) {
      return <div>Une erreur s'est produite : {error.message}</div>;
    }

    return (
      <div>
        <h2>{recipe.strMeal}</h2>
        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
        <p>{recipe.strInstructions}</p>
      </div>
    );
  }
}

export default Recipe;
