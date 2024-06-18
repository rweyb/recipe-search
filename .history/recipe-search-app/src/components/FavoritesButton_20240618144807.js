import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // react-iconsライブラリからFaHeartアイコンをインポート

const FavoriteButton = ({ setCount }) => {

  const [isFavorite,setIsFavorite] =useState(false);

  //ボタンクリック
  const handleClick = () => {
    setIsFavorite(!isFavorite);

    setCount(count => isFavorite ? count -1 : count +1);
  };

  return (
    <button onClick={handleClick} >
      <FaHeart color={isFavorite ? 'red' : 'grey'} /> {/* ハートアイコンを表示 */}
    </button>
  );
};

export default FavoriteButton;