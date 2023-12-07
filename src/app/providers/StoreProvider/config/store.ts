import { configureStore } from '@reduxjs/toolkit';
import { counterRedusers } from 'entities/Counter';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState: StateSchema) {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterRedusers,
        },
        devTools: __IS_DEV__,
        preloadedState: initialState,
    });
}
