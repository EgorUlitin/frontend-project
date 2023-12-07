import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { counterRedusers, counterActions } from './counterSlice';
import { CounterSchema } from '../types/CounterSchema';

describe('counterSlice.test', () => {
    test('decrement', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterRedusers(state, counterActions.decrement()),
        )
            .toEqual({ value: 9 });
    });
    test('increment', () => {
        const state: CounterSchema = { value: 10 };
        expect(
            counterRedusers(state, counterActions.increment()),
        )
            .toEqual({ value: 11 });
    });
    test('should work with empty state', () => {
        expect(
            counterRedusers(undefined, counterActions.increment()),
        )
            .toEqual({ value: 1 });
    });
});
