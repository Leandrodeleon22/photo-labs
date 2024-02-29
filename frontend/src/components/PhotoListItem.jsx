import React, { useContext } from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";
import { FavoritesContext } from "App";
import FavBadge from "./FavBadge";

// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };s

const PhotoListItem = ({ sampleDataForPhotoListItem }) => {
  /* Insert React */
  // console.log(sampleDataForPhotoListItem);
  const { setShowModal, setActivePhoto, showModal, activePhoto } =
    useContext(FavoritesContext);
  const {
    id,
    location: { city, country },
    urls: { full, regular },
    user,
  } = sampleDataForPhotoListItem;

  const handleModalClick = () => {
    setShowModal(!showModal);
    setActivePhoto(sampleDataForPhotoListItem);
  };

  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} />

      {/* <FavBadge /> */}
      <div onClick={handleModalClick}>
        <img className="photo-list__image" src={full} alt={user.username} />
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
      </div>
    </div>
  );
};

export default PhotoListItem;
