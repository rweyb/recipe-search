import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import Result from '../components/Result';
import '../components/Style.css'

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
            <h1>メニュー名で選ぶ</h1>
            <SearchBar onSearch={handleSearch} />
            <Results result={results} />
            
        </div>
    )
} 