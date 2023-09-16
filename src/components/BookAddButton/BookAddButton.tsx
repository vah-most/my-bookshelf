"use client";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { emptyBookProps } from "@/utils/utils";
import { addBook } from "@/redux/booksSlice";
import BookEditor from "@/components/BookEditor";
import IBook from "@/types/IBook";

import "./BookAddButton.scss";

const BookAddButton = () => {
  const [editorDisplay, setEditorDisplay] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleBookAdd = (book: IBook) => {
    dispatch(addBook(book));
    setEditorDisplay(false);
  };

  const handleBookAddRequest = () => {
    setEditorDisplay(true);
  };

  const handleEditorClose = () => {
    setEditorDisplay(false);
  };

  return (
    <React.Fragment>
      <div
        className="book-add-button__container"
        onClick={handleBookAddRequest}
      >
        + Add a book
      </div>
      {editorDisplay && (
        <BookEditor
          book={emptyBookProps()}
          onClose={handleEditorClose}
          onSave={handleBookAdd}
        />
      )}
    </React.Fragment>
  );
};

export default BookAddButton;
