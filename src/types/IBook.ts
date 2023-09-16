export type TBookId = string;

interface IBook {
  id: TBookId;
  name: string;
  price: number;
  category: string;
  description: string;
}

export default IBook;
