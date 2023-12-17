import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginLoading } from './getLoginIsLoading';

describe('getLoginLoading.test', () => {
    test('should return false', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false,
            },
        };
        expect(getLoginLoading(state as StateSchema)).toEqual(false);
    });
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginLoading(state as StateSchema)).toEqual(true);
    });
});
