"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { RootState } from "@/redux/store";
import BookItem from "@/components/BookItem";
import IBook, { TBookId } from "@/types/IBook";
import { addBook, deleteBook, modifyBook } from "@/redux/booksSlice";
import BookEditor from "@/components/BookEditor";

import "./BookList.scss";

const BookList = () => {
  const { books } = useSelector((state: RootState) => state.books);
  const dispatch = useDispatch();
  const [modifyingBook, setModifyingBook] = useState<IBook | null>(null);

  const handleBookClick = (bookId: TBookId) => {
    const book = books.find((book: IBook) => book.id === bookId);
    if (!book) return;
    setModifyingBook(book);
  };

  const handleBookSave = (book: IBook) => {
    setModifyingBook(null);
    dispatch(book.id ? modifyBook(book) : addBook(book));
  };

  const handleBookDelete = (bookId: TBookId) => {
    setModifyingBook(null);
    dispatch(deleteBook(bookId));
  };

  return (
    <div className="book-list__container">
      {books.length > 0 ? (
        <div className="book-list__items">
          {books.map((book: IBook) => {
            return (
              <BookItem
                key={book.id}
                book={book}
                onSelect={handleBookClick}
                onDelete={handleBookDelete}
              />
            );
          })}
        </div>
      ) : (
        <div data-testid="book-list__empty" className="book-list__empty">
          No books added yet.
        </div>
      )}
      {modifyingBook && (
        <BookEditor
          book={modifyingBook}
          onClose={() => setModifyingBook(null)}
          onSave={handleBookSave}
          onDelete={handleBookDelete}
        />
      )}
    </div>
  );
};

export default BookList;
