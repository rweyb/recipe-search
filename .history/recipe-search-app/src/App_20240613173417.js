import React from 'react';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import RecipePage from './pages/RecipePage';

function App() {
  return (
    <div className="App">
      <HomePage />
      <FavoritesPage />
      <RecipePage />
    </div>
  );
}

export default App;