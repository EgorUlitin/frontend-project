export const setRate = (rate: number, feedback: string) => {
    cy.getByTestId(`StarRating.${rate}`).click();
    cy.getByTestId('Rating.Input').type(feedback);
    cy.getByTestId('Rating.Accept').click();
};

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(rate: number, feedback: string): Chainable<void>;
        }
    }
}
