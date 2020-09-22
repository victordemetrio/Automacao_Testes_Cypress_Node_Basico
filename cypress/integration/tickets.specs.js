describe("Tickets",() => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

    it.only("fill all the tex input fields", () => {
        const firstName = "Victor";
        const lastName = "Demetrio";
        const email = "victoremetrio@gmail.com";
        const specialRequests = "cypress";//digitar "vegetarian" gera bug
        const signature = firstName +" "+ lastName; //"${firtName} ${lastName}" nao funcionou ECMAScript2015
        
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type(email);
        cy.get('#requests').type(specialRequests);
        cy.get('#signature').type(signature);
    });
    it("has 'TICKETBOX' header's heading", () => {});

});