describe ('My First Test Suite', function(){
   
    //test step
    it('TC01', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca') 
        cy.wait(2000)
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').find('.product').should('have.length',4)
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
    })
    /*cy es un comando global.
    este nos permite invocar a cualquiera de los comandos de Cypress
    Similar a webdriver en selenium
    No necesitas crear objetos*/

    
    })