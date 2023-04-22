/// <reference types="Cypress"/>

describe("Test Contact Us form via WebdriverUni", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    // cypress code
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get("#contact-us > .thumbnail").click();
    cy.get('[name="first_name"]').type("Jacky");
    cy.get('[name="last_name"]').type("Koo");
    cy.get('[name="email"]').type("123@mail.com");
    cy.get("textarea.feedback-input").type("I need to get better for Cypress");
    cy.get('[type="submit"]').click();
    cy.get("h1").should("have.text", "Thank You for your Message!");
  });

  xit("Should not be able to submit a successful submission via contact us form as all fields are required", () => {
    cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html");
    // cy.get("#contact-us > .thumbnail").click();
    cy.get('[name="first_name"]').type("Tom");
    cy.get('[name="last_name"]').type("Tom");
    cy.get("textarea.feedback-input").type("How can I learn Cypress");
    cy.get('[type="submit"]').click();
  });
});
