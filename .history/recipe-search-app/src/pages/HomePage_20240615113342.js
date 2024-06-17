import React from 'react';
import { Link } from 'react-router-dom';
import FavoritesIcon from '../components/FavoritesIcon';
import Header from '../components/Header';
import { Button }from '@mui/material';


const buttonStyle = {
    width: '200px',
    margin: '10px auto',
};

const HomePage = () => {
    return (
    <div>
    <Header />
    <main>
        <h2>検索方法を選んでください</h2>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Button variant = "contained"
                color= 'primary'
                style= {buttonStyle}
                component={Link}
                to="/recipe"
                >
            メニュー名で選ぶ
        </Button>

        <Button variant ="contained"
                color='secondary'
                style= {buttonStyle}
                component={Link}
                to="/shokuzai"
                >
            食材で選ぶ
        </Button>

    </div>
        
        
    </main>
    </div>
);
};

export default HomePage;
