import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

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
  const {
    id,
    location: { city, country },
    urls: { full, regular },
    user,
  } = sampleDataForPhotoListItem;
  return (
    <div className="photo-list__item">
      <PhotoFavButton id={id} />
      <img className="photo-list__image" src={full} alt={user.username} />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={user.profile}
          alt={user.username}
        />
        <div className="photo-list__user-info">
          <h2>{user.username}</h2>
          <p className="photo-list__user-location">{city}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
