import React from 'react';
import { useQuery } from 'react-query';
import { useState } from 'react';
import SearchBar from '../components/SearchBar';

const fetchRecipe = async (query) => {

    const res = await fetch (`https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=e06e2a5afcf14b52139c1fb6c58e9dbc`);
    if (res.ok) { return res.json() }
    throw new Error(res.statusText);
};

export default function RecipeReducer() {
    const [query, setQuery] = useState('');
    const { data, isLoading, isError, error } = useQuery(['recipe', query]);
    
    const handleSearch = (newQuery) => {
        setQuery(newQuery);
    };
    
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {data.map(recipe => (
                <p key={recipe.id}>{recipe.title}</p>
        ))}
    </>
    );
}