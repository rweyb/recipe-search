import React from "react";
import { useState } from "react";

export default function SearchBar({ onSearch }) {
const [query, setQuery] = useState('');

const handleSearch = () => {
  onSearch(query);
};

return( 
  <div>
    <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        />
        <button onClick={handleSearch}>検索</button>
  </div>
);
}

