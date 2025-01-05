describe('End-to-End Quiz Test', () => {
    it('should complete the quiz and show the score', () => {
        cy.visit('/'); // Change this to your app's URL
        cy.get('button.start').click();
        cy.get('input.answer').type('Sample Answer 1');
        cy.get('button.submit').click();
        cy.get('input.answer').type('Sample Answer 2');
        cy.get('button.submit').click();
        // Repeat for all questions
        cy.get('button.finish').click();
        cy.get('.score').should('exist'); // Check if the score is displayed
    });
});