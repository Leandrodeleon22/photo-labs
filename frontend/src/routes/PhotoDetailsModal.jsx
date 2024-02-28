import React, { useContext } from "react";

import "../styles/PhotoDetailsModal.scss";
import "../styles/PhotoListItem.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import { FavoritesContext } from "App";
import PhotoList from "components/PhotoList";

const PhotoDetailsModal = ({ data }) => {
  const { setShowModal } = useContext(FavoritesContext);
  // console.log(favorites);
  const {
    id,
    location: { city, country },
    urls: { full, regular },
    user,
  } = data;

  console.log(data);
  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => setShowModal(false)}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>

      <img
        src={regular}
        alt={user.username}
        className="photo-details-modal__image"
      />

      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={user.username}
        />
        <div className="photo-list__user-info">
          <h2>{user.name}</h2>
          <p className="photo-list__user-location">{`${city} ${country}`}</p>
        </div>
      </div>
      <h2>similar photos</h2>
      <PhotoList className="photo-details-modal__images" />
    </div>
  );
};

export default PhotoDetailsModal;
