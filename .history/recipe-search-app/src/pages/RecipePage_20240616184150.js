import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';

export default function RecipePage() {
    const navigate = useNavigate();
    const [results, setResults] = useState(null);
    

    const handleSearch = (query) => {
        console.log(query);
        navigate(`/search?query=${encodeURIComponent(query)}`);
        setResults(['レシピ1', 'レシピ1', 'レシピ1']);
    };

    return (
        <div>
            <SearchBar onSearch={handleSearch} />
            <SearchResults result={results} />
            
        </div>
    )
} 