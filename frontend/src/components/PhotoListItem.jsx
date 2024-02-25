import React from "react";

import "../styles/PhotoListItem.scss";

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
  return (
    <div className="photo-list__item">
      <img
        className="photo-list__image"
        src={sampleDataForPhotoListItem.imageSource}
        alt={sampleDataForPhotoListItem.username}
      />
      <div className="photo-list__user-details">
        <img
          className="photo-list__user-profile"
          src={sampleDataForPhotoListItem.profile}
          alt={sampleDataForPhotoListItem.username}
        />
        <div className="photo-list__user-info">
          <h2>{sampleDataForPhotoListItem.username}</h2>
          <p className="photo-list__user-location">
            {sampleDataForPhotoListItem.location.city}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
