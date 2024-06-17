import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  }

  return (
    <IconButton onClick={toggleFavorite}>
      {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
    </IconButton>
  );
};

export default FavoriteButton;