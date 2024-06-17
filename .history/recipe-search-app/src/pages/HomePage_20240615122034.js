import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import FavoritesIcon from '../components/FavoritesIcon';
import Header from '../components/Header';
import { Button }from '@mui/material';


const buttonStyle = {
    width: '200px',
    margin: '10px auto',
};

export default function HomePage() {

    const navigate = useNavigate();

    const handleClick = () => navigate('/recipe', '/ingredient');
    
    return (
    <div>
    <Header />
    <main>
        <h2>検索方法を選んでください</h2>

    <div style={{ display: 'flex', flexDirection: 'column' }}>
    <Button variant = "contained"
                color= 'primary'
                style= {buttonStyle}
                onClick={handleClick}
                component={Link}
                to="/recipe"
                >
            メニュー名で選ぶ
        </Button>

        <Button variant ="contained"
                color='secondary'
                style= {buttonStyle}
                onClick={handleClick}
                component={Link}
                to="/ingredient"
                >
            食材で選ぶ
        </Button>

    </div>
        
        
    </main>
    </div>
);
};


