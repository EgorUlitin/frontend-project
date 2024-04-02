export const updateProfile = (firstname: string, secondname: string) => {
    cy.getByTestId('EditableProfileHeader.EditButton').click();
    cy.getByTestId('ProfileCard.Firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.Secondname').clear().type(secondname);
    cy.getByTestId('EditableProfileHeader.SaveButton').click();
};

export const resetProfile = (profileId: string) => {
    return cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: 'zxc' },
        body: {
            id: '1',
            first: 'testuser',
            lastname: 'usertest',
            age: 666,
            currency: 'RUB',
            country: 'Russia',
            city: 'Moscow',
            username: 'Alex123',
            avatar: 'https://xakep.ru/wp-content/uploads/2018/05/171485/KuroiSH-hacker.jpg',
        },
    });
};

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(
                firstname: string,
                secondname: string,
            ): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}
