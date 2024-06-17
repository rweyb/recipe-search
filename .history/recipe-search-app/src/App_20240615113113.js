import React from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import RecipePage from './pages/RecipePage';
import ShokuzaiPage from './pages/ShokuzaiPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HomePage />}>
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/recipe' element={<RecipePage />} /> 
          <Route path='/shokuzai' element={<ShokuzaiPage />} />
    </Route>
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
