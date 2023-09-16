import { createSlice } from "@reduxjs/toolkit";
import cloneDeep from "lodash/fp/cloneDeep";
import IBook, { TBookId } from "@/types/IBook";
import { generateBookId } from "@/utils/utils";

interface IBookStateProps {
  books: IBook[];
}

interface IBookItemAction {
  payload: IBook;
}

interface IBookIdAction {
  payload: TBookId;
}

const initialState: IBookStateProps = {
  books: [],
};

const booksSlice = createSlice({
  name: "books",
  initialState: initialState,
  reducers: {
    addBook: (state: IBookStateProps, action: IBookItemAction) => {
      const modifiedBooks = cloneDeep(state.books);
      const newId = generateBookId();
      const newBookProps = cloneDeep(action.payload);
      const newBook = { ...newBookProps, id: newId };
      modifiedBooks.push(newBook);
      state.books = modifiedBooks;
    },

    modifyBook: (state: IBookStateProps, action: IBookItemAction) => {
      const modifiedBook = cloneDeep(action.payload);
      const modifiedBookId = modifiedBook.id;
      const bookIndex = state.books.findIndex(
        (book) => book.id === modifiedBookId
      );
      if (bookIndex >= 0) {
        const modifiedBooks = cloneDeep(state.books);
        modifiedBooks[bookIndex] = modifiedBook;
        state.books = modifiedBooks;
      }
    },

    deleteBook: (state: IBookStateProps, action: IBookIdAction) => {
      const deleteId = action.payload;
      const books = state.books;
      const modifiedBooks = books.filter((book) => book.id !== deleteId);
      state.books = modifiedBooks;
    },
  },
});

export const { addBook, modifyBook, deleteBook } = booksSlice.actions;
export default booksSlice.reducer;
