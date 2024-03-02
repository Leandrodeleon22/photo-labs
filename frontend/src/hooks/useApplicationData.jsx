import React from "react";
import { useState } from "react";

const useApplicationData = (photos) => {
  const [favorites, setFavorites] = useState(photos);
  const [activePhoto, setActivePhoto] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isLike, setIsLike] = useState(false);

  return {
    favorites,
    setFavorites,
    activePhoto,
    setActivePhoto,
    showModal,
    setShowModal,
    isLike,
    setIsLike,
  };
};

export default useApplicationData;
