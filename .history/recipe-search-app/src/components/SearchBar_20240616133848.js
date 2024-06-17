import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const [searchParams, setSearchParams] = useSearchParams();


useEffect(() => {

},[searchParams]);







// 検索バーのコンポーネント
function SearchBar({ onSearch }) {
  const [input, setInput] = useState('');

  // 入力値が変更されたときのハンドラ
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  // 検索を実行するハンドラ
  const handleSearch = () => {
    onSearch(input); // 親コンポーネントに入力値を渡す
  };

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