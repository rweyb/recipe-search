import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function RecipePage() {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('recipe');
    };

    return (
        <div>
            <Button onClick={handleMenuClick}></Button>
        </div>
    )
} 