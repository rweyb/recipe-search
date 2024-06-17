import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';


export default function RecipePage() {
    const navigate = useNavigate();

    const handleIngredientClick = () => {
        navigate('/ingredient');
    };

    return (
        <div>
            <Button onClick={handleIngredientClick}>
                食材で選ぶ
            </Button>
        </div>
    )
} 