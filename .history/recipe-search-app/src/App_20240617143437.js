import React from 'react';
import { Route, RouterProvider, createBrowserRouter,
      createRoutesFromElements, } from 'react-router-dom';
import Layout from './components/Layout';
import RecipeResults from './components/RecipeResults';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import RecipePage from './pages/RecipePage';
import IngredientPage from './pages/IngredientPage'


const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='favorites' element={<FavoritesPage />} />
          <Route path='recipe' element={<RecipePage />} /> 
          <Route path='ingredient' element={<IngredientPage />} />
          <Route path='results' element={<RecipeResults />} />
    </Route>
      </>
    )
);



const App = () => {
  return (
    <>
    <RouterProvider router={router} />
    </>
    
  );
};

export default App;
