/// <reference types="Cypress" />

const sampleBook = {
  id: "1234",
  name: "Sample-Name",
  description: "Description about the book!",
  category: "Sample-Category",
  price: 19.99,
};

describe("Books Page", () => {
  beforeEach(() => {
    cy.wait(500);
    cy.visit("/");
  });

  it("Checking initial state of the page", () => {
    cy.get(".book-list__editor-modal").should("not.exist");
    cy.get(".book-list__items").should("not.exist");
    cy.get(".book-list__empty").should("exist");
    cy.get(".book-add-button__container").should("exist");
  });

  it("User adds a new book", () => {
    cy.get(".book-add-button__container").trigger("click");
    cy.wait(2000);
    cy.get(".book-list__editor-modal").should("exist");
    cy.get(".book-editor__row-name").type(sampleBook.name);
    cy.get(".book-editor__row-category").type(sampleBook.category);
    cy.get(".book-editor__row-price").type(sampleBook.price.toString());
    cy.get(".book-editor__row-desc").type(sampleBook.description);
    cy.get(".book-editor__save-btn").trigger("click");
    cy.get(".book-list__items").should("exist");
  });
});
