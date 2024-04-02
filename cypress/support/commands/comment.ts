export const addComment = (text: string) => {
    cy.getByTestId('AddCommentForm.Input').type(text);
    cy.getByTestId('AddCommentForm.SandButton').click();
};
export const removeArticle = (articleId: string) => {
    return cy.request({
        method: 'DELETE',
        url: `http://localhost:8000/articles/${articleId}`,
        headers: { Authorization: 'zxc' },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>;
        }
    }
}
