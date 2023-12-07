import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getCounterValue } from './getCounterValue';

describe('getCounterValue.test', () => {
    const state: DeepPartial<StateSchema> = {
        counter: { value: 10 },
    };
    test('should return counter value', () => {
        expect(getCounterValue(state as StateSchema)).toEqual(10);
    });
});
