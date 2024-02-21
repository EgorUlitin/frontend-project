import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import EditableProfileCard from './EditableProfileCard';

const profile: Profile = {
    id: '1',
    first: 'admin',
    lastname: 'admin',
    age: 465,
    currency: Currency.EUR,
    country: Country.Russia,
    city: 'Moscow',
    username: 'admin123',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin123',
            },
        },
    },
    asyncReducers: { profile: profileReducer },
};

describe('features/EditableProfileCard', () => {
    test('profile is editable', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));
        expect(screen.getByTestId('EditableProfileHeader.CancelButton')).toBeInTheDocument();
    });

    test('after cancel', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Secondname'));

        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'Ivan');
        await userEvent.type(screen.getByTestId('ProfileCard.Secondname'), 'Ivanov');

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('Ivan');

        await userEvent.click(screen.getByTestId('EditableProfileHeader.CancelButton'));

        expect(screen.getByTestId('ProfileCard.Firstname')).toHaveValue('admin');
        expect(screen.getByTestId('ProfileCard.Secondname')).toHaveValue('admin');
    });

    test('validation firstname', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Secondname'));

        await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'));

        expect(screen.getByTestId('EditableProfileCard.Error.Paragraph')).toBeInTheDocument();
    });

    test('sending without errors', async () => {
        const mockPutReq = jest.spyOn(api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await userEvent.click(screen.getByTestId('EditableProfileHeader.EditButton'));

        await userEvent.clear(screen.getByTestId('ProfileCard.Firstname'));
        await userEvent.clear(screen.getByTestId('ProfileCard.Secondname'));

        await userEvent.type(screen.getByTestId('ProfileCard.Firstname'), 'Ivan');
        await userEvent.type(screen.getByTestId('ProfileCard.Secondname'), 'Ivanov');

        await userEvent.click(screen.getByTestId('EditableProfileHeader.SaveButton'));

        expect(mockPutReq).toHaveBeenCalled();
    });
});
