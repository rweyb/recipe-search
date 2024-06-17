import { useQuery } from 'react-query';

const fetchRecipe = async () => {

    const res = await fetch (`https://app.rakuten.co.jp/services/api/Recipe/CategoryList/20170426?format=json&applicationId=e06e2a5afcf14b52139c1fb6c58e9dbc`);
    if (res.ok) { return res.json() };
    throw new Error(res.statusText);
};

export default function recipeReducer() {

    const { data, isLoading, isError, error } = useQuery('recipe', fetchRecipe);
    if (isLoading) {
        return <p>Loading...</p>;
    }
    if (isError) {
        return <p>Error: {error.message}</p>;
    }

    
}