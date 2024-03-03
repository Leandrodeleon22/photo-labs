import React, { useReducer } from "react";
import photos from "mocks/photos";
const initialState = {
  favorites: [],
  activePhoto: null,
  showModal: false,
  isLike: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_FAVORITES":
      return { ...state, favorites: action.payload };
    case "SET_ACTIVE_PHOTO":
      return { ...state, activePhoto: action.payload };
    case "SET_SHOW_MODAL":
      return { ...state, showModal: action.payload };
    case "SET_IS_LIKE":
      return { ...state, isLike: action.payload };
    default:
      return state;
  }
};

const useApplicationData = (photos) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return {
    favorites: state.favorites && photos,
    setFavorites: (favorites) =>
      dispatch({ type: "SET_FAVORITES", payload: favorites }),
    activePhoto: state.activePhoto,
    setActivePhoto: (activePhoto) =>
      dispatch({ type: "SET_ACTIVE_PHOTO", payload: activePhoto }),
    showModal: state.showModal,
    setShowModal: (showModal) =>
      dispatch({ type: "SET_SHOW_MODAL", payload: showModal }),
    isLike: state.isLike,
    setIsLike: (isLike) => dispatch({ type: "SET_IS_LIKE", payload: isLike }),
  };
};

export default useApplicationData;
