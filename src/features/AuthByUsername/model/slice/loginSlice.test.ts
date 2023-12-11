import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';
import { loginByUsename } from '../services/loginByUsername/loginByUsername';

describe('loginSlice.test', () => {
    test('test setUsername', () => {
        const state: DeepPartial<LoginSchema> = { username: '123' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setUsername('123'),
        ))
            .toEqual({ username: '123' });
    });
    test('test setPassword', () => {
        const state: DeepPartial<LoginSchema> = { password: '321' };
        expect(loginReducer(
            state as LoginSchema,
            loginActions.setPassword('321'),
        ))
            .toEqual({ password: '321' });
    });
});
