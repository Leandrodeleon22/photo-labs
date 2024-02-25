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
    <>
      <div>
        <img
          src={sampleDataForPhotoListItem.imageSource}
          alt={sampleDataForPhotoListItem.username}
          className="photo-list__item"
        />
      </div>
      <div>
        <div>
          <img
            src={sampleDataForPhotoListItem.profile}
            alt={sampleDataForPhotoListItem.username}
          />
        </div>
        <div>
          <h2>{sampleDataForPhotoListItem.username}</h2>
          <p>{sampleDataForPhotoListItem.location.city}</p>
        </div>
      </div>
    </>
  );
};

export default PhotoListItem;
