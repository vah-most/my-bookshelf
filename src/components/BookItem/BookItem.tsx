import React, { useState } from "react";

import "./BookItem.scss";
import IBook, { TBookId } from "@/types/IBook";
import { useDispatch } from "react-redux";
import Prompt from "../Prompt";
import { Trash, Trash3 } from "react-bootstrap-icons";

interface IBookItemProps {
  book: IBook;
  className?: string;
  onSelect?: (bookId: TBookId) => void;
  onDelete?: (bookId: TBookId) => void;
}

const BookItem = ({
  book,
  className = "",
  onDelete,
  onSelect,
}: IBookItemProps) => {
  const [deletePromptDisplay, setDeletePromptDisplay] = useState(false);
  return (
    <div
      data-testid="book-item__container"
      className={`book-item__container ${className}`}
      onClick={() => {
        onSelect && onSelect(book.id);
      }}
    >
      <div className="book-item__title">
        <div className="book-item__name">{book.name}</div>
        <div className="book-item__category">{book.category}</div>
      </div>
      <div className="book-item__price">{book.price}$</div>
      <div className="book-item__desc">{book.description}</div>
      <div
        data-testid="book-item__delete"
        className="book-item__delete"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setDeletePromptDisplay(true);
        }}
      >
        <Trash3 className="book-item__delete-icon" />
      </div>
      {deletePromptDisplay && (
        <Prompt
          message="Are you sure?"
          onCancel={() => setDeletePromptDisplay(false)}
          onOk={() => {
            setDeletePromptDisplay(false);
            onDelete && onDelete(book.id);
          }}
        />
      )}
    </div>
  );
};

export default BookItem;
