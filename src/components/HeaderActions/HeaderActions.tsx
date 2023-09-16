"use client";

import React from "react";

import StoreProvider from "@/redux/store";
import BookAddButton from "@/components/BookAddButton";

import "./HeaderActions.scss";

const HeaderActions = () => {
  return (
    <StoreProvider>
      <BookAddButton />
    </StoreProvider>
  );
};

export default HeaderActions;
