import React from "react";

import BookAddButton from "@/components/BookAddButton";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__title">
        <span>My BookShelf</span>
      </div>
      <BookAddButton />
    </div>
  );
};

export default Header;
