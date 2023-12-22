import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { Profile, ValidateProfileError } from 'entities/Profile';
import { validateProfileData } from './validateProfileData';

const data = {
    first: 'Ivan',
    lastname: 'Ivanov',
    age: 32,
    currency: Currency.RUB,
    country: Country.Belarus,
    city: 'Moscow',
    username: 'ivanok',
};

describe('validateProfileData.test', () => {
    test('without errors', async () => {
        expect(validateProfileData(data)).toEqual([]);
    });

    test('with country error', async () => {
        const result = validateProfileData({ ...data, country: undefined });

        expect(result).toEqual([
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('with errors', async () => {
        const result = validateProfileData({ ...data, age: undefined, country: undefined });
        expect(result).toEqual([
            ValidateProfileError.INCORRECT_AGE,
            ValidateProfileError.INCORRECT_COUNTRY,
        ]);
    });

    test('without errors', async () => {
        expect(validateProfileData(data)).toEqual([]);
    });
});
