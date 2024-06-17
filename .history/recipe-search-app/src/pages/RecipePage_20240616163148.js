import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

export default function RecipePage() {
    const navigate = useNavigate();

    

    const handleSearch = (query) => {
        console.log(query);
        navigate(`/search?query=${encodeURIComponent(query)}`);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
        </div>
    )
} 