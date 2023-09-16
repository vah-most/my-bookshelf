import IBook from "@/types/IBook";
import moment from "moment";

export const generateBookId = () => {
  const id = `${moment().unix()}${Math.floor(Math.random() * 1000000)}`;
  return id;
};

export const emptyBookProps = (): IBook => {
  return {
    name: "",
    description: "",
    price: 0,
    category: "",
    id: "",
  };
};
