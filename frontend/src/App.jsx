import React from "react";

import "./App.scss";
import PhotoList from "components/PhotoList";

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
const App = () => {
  return (
    <div className="App">
      {}
      <PhotoList />
    </div>
  );
};

export default App;
