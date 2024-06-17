import React, { useState } from 'react';
import { useQuery } from 'react-query';
import RecipePage from '../pages/IngredientPage';

export default function SearchBar() {
  const  [searchWord, setSearchWord] =useState('');

  const [date, isLoading, isError, error, refetch ] =useQuery('recipe', () => RecipePage(searchWord));


const handleSearch = () => {
  refetch();
};

return (
  <div>
    <input
    
  </div>
)
}





  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="検索..."
      />
      <button onClick={handleSearch}>検索</button>
    </div>
  );
}