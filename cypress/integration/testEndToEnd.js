describe("Tickets",() => {
    beforeEach(() => cy.visit("https://ticket-box.s3.eu-central-1.amazonaws.com/index.html"));

    const firstName = "Victor";
    const lastName = "Demetrio";
    const email = "victoremetrio@gmail.com";
    const specialRequests = "cypress";
    const signature = firstName +" "+ lastName;
    const ticketQuantity = "2";
    const ticketType = "#vip"
    const HowDidYouHearAboutThisEventSocialMedia = "#social-media";
    const HowDidYouHearAboutThisEventFriend = "#friend";
    const HowDidYouHearAboutThisEventPublication ="#publication";

    it("has 'TICKETBOX' header's heading", () => {
        cy.get("header h1").should("contain", "TICKETBOX");
    });

    it("fill and reset the form", () => {
        cy.get('#first-name').type(firstName);
        cy.get('#last-name').type(lastName);
        cy.get('#email').type(email);
        cy.get('#requests').type(specialRequests);
        cy.get('#signature').type(signature);

        cy.get("#ticket-quantity").select(ticketQuantity);
        
        cy.get(ticketType).check();
        
        cy.get(HowDidYouHearAboutThisEventSocialMedia).check();
        cy.get(HowDidYouHearAboutThisEventFriend).uncheck();

        cy.get(".agreement p").should(
            "contain",
            'I, '+signature+', wish to buy '+ticketQuantity+' VIP tickets.'
        );

        cy.get("#agree").click(); //"I Agree" checkbox

        cy.get("body:nth-child(2) div:nth-child(1) form:nth-child(2) div:nth-child(8) > button.active")
        .as("submitButton")
        .should("not.be.disabled");
        
        cy.get("button[type='reset']")
        .as("resetButton")
        .click();

        cy.get("@submitButton").should("be.disabled");
    });

    it("fill mandatory fields using support command", () => {
        const customer = {
            firstName: "Victor",
            lastName: "Demetrio",
            email: "victor@gmail.com",
            signature: "Victor Demetrio",
        };
        cy.fillMandatoryFields(customer);

        

        cy.get("body:nth-child(2) div:nth-child(1) form:nth-child(2) div:nth-child(8) > button.active")
        .as("submitButton")
        .should("not.be.disabled");
        
        cy.get("#agree")
        .as("IAgree")
        .uncheck();

        cy.get("@submitButton").should("be.disabled");
    });
    

});