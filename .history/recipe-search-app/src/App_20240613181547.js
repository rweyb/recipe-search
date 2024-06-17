import { Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom';
import HomePage from './pages/HomePage';



const App = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<HomePage />}>
            
    </Route>
    )
);

export default App;
