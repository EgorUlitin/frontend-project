import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import {
    ReactNode,
} from 'react';

export const StoreDecorator = ({ children, state }:
	{ children: ReactNode, state: DeepPartial<StateSchema> }) => (
    <StoreProvider initialState={state}>{children}</StoreProvider>
);
