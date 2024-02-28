import React, { useContext, useMemo, useState } from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import { FavoritesContext } from "App";

const HomeRoute = ({ topics, photos }) => {
  const { favorites, isLike, setIsLike } = useContext(FavoritesContext);

  const allFavorites = useMemo(() => {
    return favorites.filter((item) => {
      return item.liked;
    });
  });

  const isLikeController = () => {
    setIsLike((isLike) => !isLike);
  };

  const thereIsLike = allFavorites.length > 0;
  return (
    <div className="home-route">
      <TopNavigation
        topics={topics}
        selected={isLike}
        onClick={isLikeController}
        displayAlert={thereIsLike}
      />
      <PhotoList photos={isLike ? allFavorites : photos} />
    </div>
  );
};

export default HomeRoute;
