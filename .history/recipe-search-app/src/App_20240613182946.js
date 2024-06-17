import { Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import RecipePage from './pages/RecipePage';


const App = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HomePage />}>
          <Route path='/favorites' element={<FavoritesPage />} />
          <Route path='/recipe' element={<RecipePage />} />  
    </Route>
    )
);
export default App;
