let profileId: string;
describe('Пользователь заходит на страницу профиля', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`/profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль успешно загрузился', () => {
        cy.getByTestId('ProfileCard.Firstname').should(
            'have.value',
            'testuser',
        );
    });
    it('Редактирует его', () => {
        cy.updateProfile('newtestuserfirstname', 'newtestusersecondname');
        cy.getByTestId('ProfileCard.Firstname').should(
            'have.value',
            'newtestuserfirstname',
        );
        cy.getByTestId('ProfileCard.Secondname').should(
            'have.value',
            'newtestusersecondname',
        );
    });
    // it('passes', () => {

    // });
});
