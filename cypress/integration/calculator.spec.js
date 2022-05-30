describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  })

  it('should display the running total', () => {
    cy.get('#number2').click();
    cy.get('#number2').click();
    cy.get('.display').should('contain', '22')
  })
//You need to create new tests for each operator.
  it('should update the display with the result of the aritmetic operators', () => {
    cy.get('#number2').click();
    cy.get('#add').click();
    cy.get('#number2').click();
    cy.get('#equals').click();
    cy.get('.display').should('contain', '4')
  })

  it('should chain multiple operations together', () => {
    cy.get('#number1').click();
    cy.get('#add').click();
    cy.get('#subtract').click();
    cy.get('#number1').click();
    cy.get('#equals').click();
    cy.get('.display').should('contain', '1')
  })

  it('should display positive numbers', () => {
    cy.get('#number1').click();
    cy.get('.display').should('contain', '1')
  })

  it('should display negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#subtract').click();
    cy.get('#number2').click();
    cy.get('#equals').click();
    cy.get('.display').should('contain', '-1')
  })

  it('should display decimal numbers', () => {
    cy.get('#number3').click();
    cy.get('#divide').click();
    cy.get('#number2').click();
    cy.get('#equals').click();
    cy.get('.display').should('contain', '1.5')
  })

  it('should display very large numbers', () => {
    cy.get('#number1').click();
    cy.get('#number0').click();
    cy.get('#divide').click();
    cy.get('#number3').click();
    cy.get('#equals').click();
    cy.get('.display').should('contain', '3.3333333333333335' )
  })

  it('should not return Infinity when dividing by 0', () => {
    cy.get('#number1').click();
    cy.get('#divide').click();
    cy.get('#number0').click();
    cy.get('#equals').click();
    cy.get('.display').should('contain', '0')
  })
})