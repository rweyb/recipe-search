import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';

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