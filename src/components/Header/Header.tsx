import React from "react";
import Image from "next/image";

import HeaderActions from "../HeaderActions";
import Logo from "@/../public/images/logo.svg";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header__container">
      <div className="header__title">
        <Image width={30} height={30} alt="" src={Logo} />
        <span>My BookShelf</span>
      </div>
      <HeaderActions />
    </div>
  );
};

export default Header;
