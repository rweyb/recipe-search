import { Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import HomePage from './HomePage';
import FavoritesPage from './FavoritesPage';
import RecipePage from './RecipePage';


const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomePage />}>
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/recipe' element={<RecipePage />} />
    </Route>
  )
);

export default App;
