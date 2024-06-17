import { Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import RecipePage from './pages/RecipePage';


const App = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HomePage />}>
            
    </Route>
    )
);

export default App;
