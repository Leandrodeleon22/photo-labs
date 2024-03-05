import React, { createContext, useState } from "react";

import "./App.scss";

import HomeRoute from "routes/HomeRoute";
// import topics from "mocks/topics";
// import photos from "mocks/photos";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import useApplicationData from "hooks/useApplicationData";

// Note: Rendering a single component to build components in isolation
// const sampleDataForPhotoListItem = {
//   id: "1",
//   location: {
//     city: "Montreal",
//     country: "Canada",
//   },
//   imageSource: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
//   username: "Joe Example",
//   profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
// };

// const photos = new Array(3);
// const photos = Array.from({ length: 3 }, (_, i) => (
//   <PhotoListItem
//     key={i}
//     sampleDataForPhotoListItem={sampleDataForPhotoListItem}
//   />
// ));

export const FavoritesContext = createContext(null);
const App = () => {
  const {
    favorites,
    setFavorites,
    activePhoto,
    setActivePhoto,
    showModal,
    setShowModal,
    isLike,
    setIsLike,
    photoData,
    topics,
    setUrl,
  } = useApplicationData();
  // favorites.forEach((obj) => {
  //   obj.liked = false;
  // });
  // console.log(photoData);
  return (
    <div className="App">
      <FavoritesContext.Provider
        value={{
          favorites,
          setFavorites,
          isLike,
          setIsLike,
          setActivePhoto,
          setShowModal,
          activePhoto,
          photoData,
          topics,
          setUrl,
        }}
      >
        {" "}
        {showModal && <PhotoDetailsModal data={activePhoto} />}
        <HomeRoute topics={topics} photos={favorites} />
      </FavoritesContext.Provider>
    </div>
  );
};

export default App;
