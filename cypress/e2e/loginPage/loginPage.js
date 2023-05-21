import { Given, When, And ,Then} from "cypress-cucumber-preprocessor/steps";
const data = require("../../fixtures/logindata.json");
import LoginPage from "../../pageObjects/loginPage.js";


const loginPage = new LoginPage();
const validUsername = data.login.validUsername;
const validPassword = data.login.validPassword;
const invalidUsername = data.login.invalidUsername;
const invalidPassword = data.login.invalidPassword;

Given("I visit the login page",()=>{
    cy.visit(Cypress.env('url'))
    loginPage.isLoginLogoVisible()
})

When("I enter a valid username",()=>{
    loginPage.usernameField.clear().type(validUsername)
})

And("I enter a valid password",()=>{
    loginPage.passwordField.clear().type(validPassword)
})

And("I click on the login button",()=>{
    loginPage.clickOnLoginBtn()
})
Then("I should be logged in successfully",()=>{
    return "Pendign test..."
})