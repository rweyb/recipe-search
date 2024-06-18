import React, { useState } from 'react';
import { FaHeart } from 'react-icons/fa'; // react-iconsライブラリからFaHeartアイコンをインポート
import { useRecoilState } from 'recoil';
import { FavoritesRecipeState } from './FavoritesRecipeState';


const FavoriteButton = () => {

  const [count, setCount] = useRecoilState(FavoritesRecipeState);
  const [isFavorite,setIsFavorite] =useState(false);

  //ボタンクリック
  const handleClick = () => {
    setIsFavorite(!isFavorite);
    //isFavoriteがtrueの時カウントを1減らし、falseの時カウントを1増やす
    setCount(isFavorite ? count -1 : count +1);
  };

  return (
    <button onClick={handleClick} >
      <FaHeart color={isFavorite ? 'red' : 'grey'} /> {/* ハートアイコンを表示 */}
    </button>
  );
};

export default FavoriteButton;