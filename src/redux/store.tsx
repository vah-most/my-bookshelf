"use client";

import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "@/redux/booksSlice";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: {
    books: booksReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const StoreProvider = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
