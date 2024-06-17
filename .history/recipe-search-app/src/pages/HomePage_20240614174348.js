import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesIcon from '../components/FavoritesIcon';
import Header from '../components/Header';
import RecipeReducer from '../reducers/recipeReducer';


const HomePage = () => {
    return (
    <div>
    <Header />
    <FavoritesIcon />
    <main>
        <h2>検索方法を選んでください</h2>
        <ul>
            <li><Link to="/search/menu">メニュー名で選ぶ</Link></li>
            <li><Link to="/search/ingredient">食材で選ぶ</Link></li>
        </ul>
    </main>
    </div>
);
};

export default HomePage;