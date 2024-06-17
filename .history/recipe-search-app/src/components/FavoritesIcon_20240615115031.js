import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  //カウントが増える
  function FavoriteButton() {
    const [count, setCount] = useState(0);
  
    return (
      <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </button>
    );
  }

  return (
    <IconButton onClick={toggleFavorite}>
      {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
    </IconButton>
  );
};

export default FavoriteButton;