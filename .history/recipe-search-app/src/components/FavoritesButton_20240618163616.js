import React, { useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // react-iconsライブラリからFaHeartアイコンをインポート
import { useRecoilState } from 'recoil';
import { FavoritesRecipeState } from './FavoritesRecipeState';


const FavoriteButton = () => {

  const [, setCount] = useRecoilState(FavoritesRecipeState);
  const [isFavorite,setIsFavorite] =useState(false);

  useEffect (() => {
    //isFavoriteがtrueの時カウントを1増やし、falseの時カウントを1減らす
    setCount((prevCount) => isFavorite ? prevCount + 1 : prevCount - 1); 
  }, [isFavorite]);



  const handleClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <button onClick={handleClick} >
      <FaHeart color={isFavorite ? 'red' : 'grey'} /> {/* ハートアイコンを表示 */}
    </button>
  );
};

export default FavoriteButton;