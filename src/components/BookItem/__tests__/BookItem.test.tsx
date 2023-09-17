import { fireEvent, render, screen } from "@testing-library/react";
import BookItem from "../BookItem";
import IBook from "@/types/IBook";

const sampleBook: IBook = {
  id: "1234",
  name: "Sample-Name",
  description: "Description about the book!",
  category: "Sample-Category",
  price: 19.99,
};

describe("Book-Item", () => {
  it("Check visibility of item props", () => {
    render(<BookItem book={sampleBook} />);
    /* Component should display all book properties on page */
    expect(screen.getByText(sampleBook.name)).not.toBeUndefined();
    expect(screen.getByText(sampleBook.description)).not.toBeUndefined();
    expect(screen.getByText(sampleBook.category)).not.toBeUndefined();
    expect(screen.getByText(`${sampleBook.price}$`)).not.toBeUndefined();
  });

  it("Check if classname is being added to container classnames", () => {
    const extraClassName = "SOME-EXTRA-CLASS-NAME";
    const { container } = render(
      <BookItem book={sampleBook} className={extraClassName} />
    );

    /* Component should set the input classname to its first child */
    expect(container.firstChild).toHaveClass(extraClassName);
  });

  it("Check if event-callbacks are functioning", async () => {
    const onDelete = jest.fn();
    const onSelect = jest.fn();
    render(
      <BookItem book={sampleBook} onDelete={onDelete} onSelect={onSelect} />
    );

    /* `onSelect` callback should not have been called before clicking on item  */
    expect(onSelect).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("book-item__container"));
    /* After clicking on item, component should call `onSelect` callback */
    expect(onSelect).toHaveBeenCalledTimes(1);
    /* `onDelete` callback should not have been called before clicking on delete button  */
    expect(onDelete).not.toHaveBeenCalled();
    fireEvent.click(screen.getByTestId("book-item__delete"));
    /* When clicking on delete button, prompt should get opened. */
    expect(screen.getByTestId("prompt-modal__ok-btn")).toBeInTheDocument();
    fireEvent.click(screen.getByTestId("prompt-modal__ok-btn"));
    /* When clicking on OK button on promot, `onDelete` callback should be called. */
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
