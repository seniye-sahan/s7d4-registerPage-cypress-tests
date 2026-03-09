import { errorMessages } from "../../src/components/Register";

describe('Register Page', () => {
  beforeEach(()=>{
     cy.visit('/')
  })
  describe('Error Messages', () => {
    it('name input throws error for 2 chars', () => {

      //Arrange
    
      //Act
      cy.get('[data-cy="ad-input"]').type("em");
      //Assert
      cy.contains(errorMessages.ad);
      });
       it('Surname input throws error for 2 chars', () => {
      //Arrange
      
      //Act
      cy.get('[data-cy="soyad-input"]').type("şa");
      //Assert
      cy.contains(errorMessages.soyad);

    });
         it('Email input throws error for emre@wit.', () => {
      //Arrange
    
      cy.get('[data-cy="email-input"]').type("emre@wit.");
      //Assert
      cy.contains(errorMessages.email);

    });
        it('Password input throws error for 1234', () => {
      //Arrange
      
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
      //Assert
      cy.contains(errorMessages.password);

    });
       it('Button is disabled for unvalidated inputs.', () => {
      //Arrange
    
      //Act
      cy.get('[data-cy="password-input"]').type("1234");
      //Assert
     cy.get('[data-cy="submit-button"]').should("be.disabled");

    });
  });
   describe('Form inputs validated', () => {
    it('button enabled for validated inputs', () => {

      //Arrange
      
      //Act
      cy.get('[data-cy="ad-input"]').type("emre");
      cy.get('[data-cy="soyad-input"]').type("şahiner");
       cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
       cy.get('[data-cy="password-input"]').type("1234Aa**");
      //Assert
      cy.get('[data-cy="submit-button"]').should("be.enabled");
      });
       it('submits form on validated inputs', () => {

      //Arrange
      
      //Act
      cy.get('[data-cy="ad-input"]').type("emre");
      cy.get('[data-cy="soyad-input"]').type("şahiner");
       cy.get('[data-cy="email-input"]').type("emre@wit.com.tr");
       cy.get('[data-cy="password-input"]').type("1234Aa**");
       cy.get('[data-cy="submit-button"]').click();
      //Assert
      cy.get('[data-cy="response-message"]').should("be.visible");
      });
  });
});