import React, { useState } from "react";

import "../styles/TopNavigationBar.scss";
import TopicList from "./TopicList";
import FavBadge from "./FavBadge";

const TopNavigation = ({ topics, selected, onClick, displayAlert }) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList topics={topics} />
      <FavBadge
        selected={selected}
        handleSelected={onClick}
        displayAlert={displayAlert}
      />
    </div>
  );
};

export default TopNavigation;
