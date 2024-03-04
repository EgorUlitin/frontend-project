import { PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';
import { buildSlice } from '@/shared/lib/store';

const initialState: AddCommentFormSchema = {
    text: '',
};

export const addCommentFormSlice = buildSlice({
    name: 'addCommentForm',
    initialState,
    reducers: {
        setText: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(loginByUsename.pending, (state) => {
    //             state.error = undefined;
    //             state.isLoading = true;
    //         })
    //         .addCase(loginByUsename.fulfilled, (state) => {
    //             state.isLoading = false;
    //         })
    //         .addCase(loginByUsename.rejected, (state, action) => {
    //             state.isLoading = false;

    //             state.error = action.payload as string;
    //         });
    // },
});

export const {
    actions: addCommentFormActions,
    reducer: addCommentFormReducer,
    useActions: useAddCommentFormActions,
} = addCommentFormSlice;
