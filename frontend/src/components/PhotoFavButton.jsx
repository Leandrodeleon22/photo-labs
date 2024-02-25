import React, { useCallback, useState } from "react";

import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

function PhotoFavButton() {
  const [selected, setSelected] = useState(false);

  const handleSelected = () => {
    setSelected((prev) => !prev);
  };
  return (
    <div className="photo-list__fav-icon">
      <div className="photo-list__fav-icon-svg">
        <FavIcon selected={selected} handleSelected={handleSelected} />
      </div>
    </div>
  );
}

export default PhotoFavButton;
