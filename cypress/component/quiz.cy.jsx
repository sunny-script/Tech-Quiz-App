describe('Quiz Component', () => {
    it('should start the quiz when the start button is clicked', () => {
        cy.visit('/'); // Change this to the URL where your app runs
        cy.get('button.start').click(); // Adjust the selector to match your start button
        cy.get('.question').should('exist'); // Check if the question is displayed
    });

    it('should display the next question after answering', () => {
        cy.get('button.start').click();
        cy.get('input.answer').type('Sample Answer'); // Adjust the selector and answer as needed
        cy.get('button.submit').click(); // Adjust the selector to match your submit button
        cy.get('.next-question').should('exist'); // Check if the next question is displayed
    });

    it('should show the score after all questions are answered', () => {
        // Add steps to answer all questions
        cy.get('button.finish').click(); // Adjust the selector to match your finish button
        cy.get('.score').should('exist'); // Check if the score is displayed
    });
});