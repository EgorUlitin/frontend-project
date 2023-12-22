import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { fetchProfileData } from './fetchProfileData';

const data = {
    first: 'Ivan',
    lastname: 'Ivanov',
    age: 32,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'ivanok',
};

describe('fetchProfileData.test', () => {
    test('succes fetching', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetching', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk();

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
