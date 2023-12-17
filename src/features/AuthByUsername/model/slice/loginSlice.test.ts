import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

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
