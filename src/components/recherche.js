import React, { useState } from 'react';

function SearchForm() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    // Envoyer la requête de recherche à l'API avec le terme de recherche
    console.log('Recherche de recettes pour : ', searchQuery);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Rechercher des recettes..."
      />
      <button type="submit">Rechercher</button>
    </form>
  );
}

export default SearchForm;