import { DeepPartial, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { profileReducer } from 'entities/Profile';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import {
    ReactNode,
} from 'react';

const defaultReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer,
};

interface StoreDecoratorProps {
    children: ReactNode,
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreDecorator = ({ children, state, asyncReducers }: StoreDecoratorProps) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultReducers, ...asyncReducers }}>
        {children}
    </StoreProvider>
);
