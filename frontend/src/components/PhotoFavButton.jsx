import React, { useCallback, useContext, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";
import { FavoritesContext } from "App";
import photos from "mocks/photos";

function PhotoFavButton({ id }) {
  const [selected, setSelected] = useState(false);
  const { favorites, setFavorites, setActivePhoto } =
    useContext(FavoritesContext);

  // favorites.forEach((obj) => {
  //   obj.liked = selected;
  // });

  const selectedPhoto = photos.filter((photo) => {
    return photo.id === id;
  });

  // setActivePhoto(selectedPhoto[0]);
  const handleSelected = () => {
    setSelected((prev) => !prev);

    selectedPhoto[0].liked = !selected;
    setFavorites(() => [...favorites]);
    // console.log(favorites);
  };

  // console.log(favorites);
  // setFavorites(allFavorites);

  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={selectedPhoto[0].liked}
          handleSelected={handleSelected}
          isFavPhotoExist={""}
        />
      </div>
    </div>
  );
}

export default PhotoFavButton;
