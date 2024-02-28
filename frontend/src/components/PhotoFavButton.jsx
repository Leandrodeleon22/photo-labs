import React, { useCallback, useContext, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { FavoritesContext } from "App";
import photos from "mocks/photos";

function PhotoFavButton({ id }) {
  const [selected, setSelected] = useState(false);
  const { favorites, setFavorites } = useContext(FavoritesContext);

  const handleSelected = () => {
    setSelected((prev) => !prev);

    const selectedPhoto = photos.filter((photo) => {
      return photo.id === id;
    });

    selectedPhoto[0].liked = !selected;
    setFavorites(() => [...photos]);
    // console.log(favorites);
  };

  // setFavorites(allFavorites);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={selected}
          handleSelected={handleSelected}
          isFavPhotoExist={""}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
