import React from "react";

import BookList from "@/components/BookList";

import "./BooksPage.scss";

const BooksPage = () => {
  return (
    <div className="books-page__container">
      <BookList />
    </div>
  );
};

export default BooksPage;
