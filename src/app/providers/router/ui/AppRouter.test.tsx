import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAbout, getRouteAdminPanel, getRouteProfile } from '@/shared/const/router';
import { UserRole } from '@/entities/User';

describe('app/router/AppRouter tests', () => {
    test('page rendered', async () => {
        componentRender(<AppRouter />, { route: getRouteAbout() });
        const page = await screen.findByTestId('AboutPage');

        expect(page).toBeInTheDocument();
    });
    test('page not found', async () => {
        componentRender(<AppRouter />, { route: '/zxc' });
        const page = await screen.findByTestId('NotFoundPage');

        expect(page).toBeInTheDocument();
    });
    test('not auth', async () => {
        componentRender(<AppRouter />, { route: getRouteProfile('1') });
        const page = await screen.findByTestId('MainPage');

        expect(page).toBeInTheDocument();
    });
    test('for auth user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    authData: {},
                },
            },
        });
        const page = await screen.findByTestId('ProfilePage');

        expect(page).toBeInTheDocument();
    });
    test('for auth user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    authData: { roles: [UserRole.USER] },
                },
            },
        });
        const page = await screen.findByTestId('ForbiddenPage');

        expect(page).toBeInTheDocument();
    });
    test('for auth user', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdminPanel(),
            initialState: {
                user: {
                    authData: { roles: [UserRole.ADMIN] },
                },
            },
        });
        const page = await screen.findByTestId('AdminPanelPage');

        expect(page).toBeInTheDocument();
    });
});
