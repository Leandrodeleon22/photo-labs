import React, { useContext, useState } from "react";

import "../styles/HomeRoute.scss";
import PhotoList from "components/PhotoList";
import TopNavigation from "components/TopNavigationBar";
import { FavoritesContext } from "App";

const HomeRoute = ({ topics, photos }) => {
  const { favorites } = useContext(FavoritesContext);

  const allFavorites = favorites.filter((item) => {
    return item.liked;
  });

  return (
    <div className="home-route">
      <TopNavigation topics={topics} />
      <PhotoList photos={photos} />
    </div>
  );
};

export default HomeRoute;
