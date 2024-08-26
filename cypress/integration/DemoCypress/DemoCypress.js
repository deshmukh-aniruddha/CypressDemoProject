const {
  Given,
  When,
  Then,
  And,
} = require("cypress-cucumber-preprocessor/steps");
import DemoPOM from "../PageObjects/DemoCypressPOM"; // import the POM file

let demoPOMObj = new DemoPOM();

Given("Launch the browser", () => {}); //By default browser opens

Then("Navigate to the base URL", () => {
  cy.visit("https://automationexercise.com/");
});

And("Verify if title is {string}", (title) => {
  cy.title().should("eq", title);
});

Then("Click on Signup / Login button", () => {
  cy.xpath(demoPOMObj.loginSignupLink()).click();
}); //using the pom

Then("Check if Login to your account visible", () => {
  cy.xpath('//h2[text()="Login to your account"]').should("be.visible");
});

And("Enter incorrect email {string} and password {string}", (email, password) => {
  cy.get("[data-qa=login-email]").type(email);
  cy.get("[name=password]").type(password);
});

When("Click login button", () => {
  cy.get("[data-qa=login-button]").click();
});

Then("Check Error Message", () => {
  cy.xpath('//p[text()="Your email or password is incorrect!"]').should(
    "be.visible"
  );
});

Then("Return to home page", () => {
  demoPOMObj.ReturnHomePg().click(); //using pom
});

Then("Check for Polo brand", () => {
  cy.xpath('//div[@class="brands-name"]//a[text()="Polo"]').should(
    "be.visible"
  );
});
Then("Check for Biba brand", () => {
  cy.xpath('//div[@class="brands-name"]//a[text()="Biba"]').should(
    "be.visible"
  );
});
