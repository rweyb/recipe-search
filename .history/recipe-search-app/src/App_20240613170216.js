import { Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages';
import FavoritesPage from './pages';
import RecipePage from './pages'


const App = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<HomePage />}>
      <Route path='/favorites' element={<FavoritesPage />} />
      <Route path='/recipe' element={<RecipePage />} />
    </Route>
  )
);

export default App;
