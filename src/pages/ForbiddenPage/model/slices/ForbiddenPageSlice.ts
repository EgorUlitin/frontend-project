import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {};

export const ForbiddenPageSlice = createSlice({
    name: 'ForbiddenPage',
    initialState,
    reducers: {
        template: (state, action: PayloadAction<string>) => {},
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(, (state, action) => {
    //             state.isLoading = false;
    //             state.error = action.payload;
    //         });
    // },
});

export const { actions: ForbiddenPageActions } = ForbiddenPageSlice;
export const { reducer: ForbiddenPageReducer } = ForbiddenPageSlice;
