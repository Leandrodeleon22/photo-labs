import React from "react";
import FavIcon from "./FavIcon";

import "../styles/FavBadge.scss";

const FavBadge = ({ isFavPhotoExist, selected, handleSelected }) => {
  return (
    <div className="fav-badge">
      <FavIcon
        displayAlert={!!isFavPhotoExist}
        selected={selected}
        handleSelected={handleSelected}
      />
    </div>
  );
};

export default FavBadge;
