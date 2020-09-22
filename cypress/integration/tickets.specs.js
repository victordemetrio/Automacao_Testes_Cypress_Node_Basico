describe("Tickets",() => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

    it("fill all the tex input fields", () => {//interagindo com campos texto
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
    //interagindo com elementos tipo select---------------
    it("select two tickets", () => {
        cy.get("#ticket-quantity").select("2");
    });
    //interagindo com radio button----------------------
    it("select vip ticket type", () => {
        cy.get("#vip").check();
    });
    //interagindo com checkbox--------------------------
    it("select 'social'checkbox", () => {
        cy.get("#social-media").check();
        //cy.get("#//label[contains(text(),'Publication')]").check(); como usar Xpath?
    });
    it("select 'all'checkbox", () => {
        cy.get("#social-media").check();
        cy.get("#publication").check();
        cy.get("#friend").check();
        
    });
    it("unSelect 'all'checkbox", () => {
        cy.get("#social-media").uncheck();
        cy.get("#publication").uncheck();
        cy.get("#friend").uncheck();
        
    });
    //REALISANDO VERIVICAÇOES-----------------------------
    it("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
        //verifica se o elemento <header h1> contem o texto "TICKETBOX"
    });
    it("alert on invalid Email", () => {
        cy.get("#email").type("victor-gmail.com");//setando email invalido
        cy.get("#email.invalid").should("exist");
        //verifica no elemento email.invalid a casse invalida should("exist")

    });
    it("alert on invalid Email", () => {
        cy.get("#email")
        .as("email")//dando apelido ao seletor css para se reutilizar dele
        .type("victor-gmail.com");//setando email invalido
        
        cy.get("#email.invalid").should("exist");
        
        cy.get("@email")//agora utilizando o elemento mao mais pelo css e sim pelo apelido utilizando o @
        .clear()//limpa o campo
        .type("victor@gmail.com")//digita email valido

        cy.get("#email.invalid").should("not.exist")//verifica que o email invalido nao existe, nao adianta usar [.as("")] nas verificaçoes
    });
    it("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    });

});