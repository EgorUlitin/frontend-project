import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';
import { ProfileSchema } from '../types/editableProfileCardSchema';
import { ValidateProfileError } from '../consts/consts';

const data = {
    first: 'Ivan',
    lastname: 'Ivanov',
    age: 32,
    currency: Currency.RUB,
    country: Country.Russia,
    city: 'Moscow',
    username: 'ivanok',
};

describe('peofileSlice.test', () => {
    test('test setReadonly', () => {
        const state: DeepPartial<ProfileSchema> = { readonly: false };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.setReadonly(true),
        ))
            .toEqual({ readonly: true });
    });
    test('test updateProfile', () => {
        const state: DeepPartial<ProfileSchema> = { form: { username: '123' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.updateProfile({
                username: '123456',
            }),
        ))
            .toEqual({ form: { username: '123456' } });
    });
    test('test cancelEdit', () => {
        const state: DeepPartial<ProfileSchema> = { data, form: { username: '' } };
        expect(profileReducer(
            state as ProfileSchema,
            profileActions.cancelEdit(),
        ))
            .toEqual({
                validateErrors: undefined, readonly: true, data, form: data,
            });
    });
    test('test updateProfileData service pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            validateErrors: [ValidateProfileError.SERVER_ERROR],
            isLoading: false,
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.pending,
        ))
            .toEqual({
                isLoading: true, validateErrors: undefined,
            });
    });
    test('test updateProfileData service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            isLoading: true,
            form: {},
            readonly: false,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        ))
            .toEqual({
                data,
                isLoading: false,
                form: data,
                readonly: true,
                validateErrors: undefined,
            });
    });
    test('test updateProfileData service fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            data,
            isLoading: true,
            form: {},
            readonly: false,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
        };
        expect(profileReducer(
            state as ProfileSchema,
            updateProfileData.fulfilled(data, ''),
        ))
            .toEqual({
                data,
                isLoading: false,
                form: data,
                readonly: true,
                validateErrors: undefined,
            });
    });
});
