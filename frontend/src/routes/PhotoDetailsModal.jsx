import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ data }) => {
  console.log(data);
  const {
    id,
    location: { city, country },
    urls: { full, regular },
    user,
  } = data;
  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <div className="big-photo-modal">
        <img src={regular} alt={user.username} className="" />
      </div>
      <div className="photo-user-details">
        <div className="photo-user">
          <img src={user.profile} alt={user.username} className="" />
        </div>
        <div className="name-country-details">
          <h2>{user.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
