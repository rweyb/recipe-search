import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesIcon from '../components/FavoritesIcon';

const HomePage = () => {
    return (
    <div>
        <header>
        <h1>レシピ検索アプリ</h1>
        <FavoritesIcon />
        </header>
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