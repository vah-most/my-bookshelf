import React from "react";

import HeaderActions from "../HeaderActions";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__title">
        <span>My BookShelf</span>
      </div>
      <HeaderActions />
    </div>
  );
};

export default Header;
