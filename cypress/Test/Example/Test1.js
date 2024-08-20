describe ('My First Test Suite', function(){
   
    //test step
    it('TC01', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        //simulamos escribir en la searchbox
        cy.get('.search-keyword').type('ca') 
        //tiempo de carga de espera (2 segundos)
        cy.wait(2000)
        //parametros de los productos a probar
        cy.get('.product').should('have.length',5)
        cy.get('.product:visible').should('have.length',4)
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length',4)
        cy.get(':nth-child(3) > .product-action > button').click()
        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('Cypress Test Suite')
        })
        cy.get('@productLocator').find('.product').each(($el,index, $list) => {

            const textVeg=$el.find('h4.product-name').text()
            if (textVeg.includes('Cashews'))
            {
              cy.wrap($el).find('button').click()
            }
        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text','GREENKART')

        //Log print
        cy.get('.brand').then(function(logoelement)
        {
         cy.log(logoelement.text())

        })
        //const logo=cy.get('.brand')
        //cy.log(cy.get('.brand').text())
        //cy.log(logo.text())
    })
    /*cy es un comando global.
    este nos permite invocar a cualquiera de los comandos de Cypress
    Similar a webdriver en selenium
    No necesitas crear objetos*/
    })