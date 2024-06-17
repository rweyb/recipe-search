import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function RecipePage() {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('recipe');
    };

    const handleSearch = (query) => {
        console.log(query);
        navigate(`/search?query=${encodeURIComponent(query)}`);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <Button onClick={handleMenuClick}>
                メニュー名で選ぶ
            </Button>
        </div>
    )
} 