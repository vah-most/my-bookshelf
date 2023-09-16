import React, { useState } from "react";
import { cloneDeep } from "lodash";
import { CurrencyDollar } from "react-bootstrap-icons";

import IBook from "@/types/IBook";
import TextField from "@/components/TextField";
import Button from "@/components/Button";
import Modal from "@/components/Modal";

import "./BookEditor.scss";

interface IBookEditorProps {
  book: IBook;
  onSave: (book: IBook) => void;
  onClose: () => void;
}

const BookEditor = ({ book, onClose, onSave }: IBookEditorProps) => {
  const [bookProps, setBookProps] = useState<IBook>(book);
  const [initialView, setInitialView] = useState<boolean>(true);

  const handlePropChange = (prop: keyof IBook, value: any) => {
    let modifiedProps = cloneDeep(bookProps) as { [prop: string]: any };
    modifiedProps[prop] = value;
    setBookProps(modifiedProps as IBook);
  };

  const submitRecordChanges = () => {
    if (!bookProps.name) return false;
    onSave(bookProps);
  };

  return (
    <Modal
      visible={true}
      onClose={onClose}
      title={bookProps.id ? "Edit Book Details" : "Add Book Details"}
      className="book-list__editor-modal"
      portalId="portal-modal-id"
    >
      <div className="book-editor__container">
        <div className="book-editor__rows">
          <div className="book-editor__row">
            <TextField
              autoFocus={true}
              error={!initialView && bookProps.name === ""}
              className="book-editor__row-name"
              label="Name"
              onBlur={() => setInitialView(false)}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handlePropChange("name", event.target.value);
              }}
              value={bookProps.name}
            />
          </div>
          <div className="book-editor__row">
            <TextField
              className="book-editor__row-category"
              label="Category"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handlePropChange("category", event.target.value);
              }}
              value={bookProps.category}
            />
            <TextField
              className="book-editor__row-price"
              label="Price"
              type="number"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                const price = Number(event.target.value);
                handlePropChange("price", price);
              }}
              value={bookProps.price}
            />
            <CurrencyDollar />
          </div>
          <div className="book-editor__row">
            <TextField
              className="book-editor__row-desc"
              label="Description"
              multiline={true}
              maxRows={3}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                handlePropChange("description", event.target.value);
              }}
              value={bookProps.description}
            />
          </div>
        </div>
        <div className="book-editor__row book-editor__submit-row">
          <Button
            className="book-editor__save-btn"
            onClick={() => submitRecordChanges()}
            variant="contained"
          >
            Save
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default BookEditor;
