import React from 'react';
import { FaHeart } from 'react-icons/fa'; // react-iconsライブラリからFaHeartアイコンをインポート

const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <button onClick={onClick} className={`favorite-button ${isFavorite ? 'active' : ''}`}>
      <FaHeart /> {/* ハートアイコンを表示 */}
    </button>
  );
};

export default FavoriteButton;