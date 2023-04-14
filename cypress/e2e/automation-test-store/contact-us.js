/// <reference types="Cypress"/>

describe("Test Contact Us from via Automation Test Store", () => {
  it("Should be able to submit a successful submission via contact us form", () => {
    // cypress code
    cy.visit("https://automationteststore.com/index.php?rt=content/contact");
    cy.get("#ContactUsFrm_first_name").type("Joe");
    cy.get("#ContactUsFrm_email").type("123@mail.com");
    cy.get("#ContactUsFrm_enquiry").type("Do you provide additonal discount?");
    cy.get(".col-md-6 > .btn").click();
  });
});
