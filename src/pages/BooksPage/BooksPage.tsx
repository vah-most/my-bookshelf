"use client";
import React from "react";

import BookList from "@/components/BookList";
import StoreProvider from "@/redux/store";

import "./BooksPage.scss";

const BooksPage = () => {
  return (
    <div className="books-page__container">
      <StoreProvider>
        <BookList />
      </StoreProvider>
    </div>
  );
};

export default BooksPage;
