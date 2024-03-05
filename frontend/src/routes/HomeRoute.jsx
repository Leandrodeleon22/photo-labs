import React, { useContext, useMemo } from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import { FavoritesContext } from "App";

const HomeRoute = ({ topics }) => {
  const { favorites, isLike, setIsLike, photoData } =
    useContext(FavoritesContext);

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
        selected={thereIsLike}
        onClick={isLikeController}
        displayAlert={thereIsLike}
      />
      <PhotoList photos={isLike ? allFavorites : photoData} />
    </div>
  );
};

export default HomeRoute;
