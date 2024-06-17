import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesIcon from '../components/FavoritesIcon';
import Header from '../components/Header';
import { Button }from '@mui/material';


const HomePage = () => {
    return (
    <div>
    <Header />
    <main>
        <h2>検索方法を選んでください</h2>

        <Button variant ="outlined"
                color='primary'
                
                >
            メニュー名で選ぶ
        </Button>

        <Button variant ="outlined" color='secondary'>
            食材で選ぶ
        </Button>
        
    </main>
    </div>
);
};

export default HomePage;
