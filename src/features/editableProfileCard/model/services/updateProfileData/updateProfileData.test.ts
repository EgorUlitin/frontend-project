import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { updateProfileData } from './updateProfileData';
import { ValidateProfileError } from '../../types/editableProfileCardSchema';

const data = {
    id: '1',
    first: 'Ivan',
    lastname: 'Ivanov',
    age: 32,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'ivanok',
};

describe('updateProfileData.test', () => {
    test('succes updating', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form:
                    data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error updating', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form:
                    data,
            },
        });
        thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');

        expect(result.payload).toEqual([
            ValidateProfileError.SERVER_ERROR,
        ]);
    });

    test('validate error updating', async () => {
        const thunk = new TestAsyncThunk(updateProfileData, {
            profile: {
                form:
                    { ...data, age: undefined },
            },
        });
        const result = await thunk.callThunk();

        expect(result.meta.requestStatus).toBe('rejected');

        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
});
