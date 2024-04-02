import { StateSchema } from '@/app/providers/StoreProvider';
import {
    getAddCommentFormError,
    getAddCommentFormText,
} from './addCommentFormSelectors';

describe('addCommentFormSelectors.test', () => {
    test('getAddCommentFormText', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                text: 'test comment text',
            },
        };
        expect(getAddCommentFormText(state as StateSchema)).toEqual(
            'test comment text',
        );
    });

    test('getAddCommentFormError', () => {
        const state: DeepPartial<StateSchema> = {
            addCommentForm: {
                error: 'test error text',
            },
        };
        expect(getAddCommentFormError(state as StateSchema)).toEqual(
            'test error text',
        );
    });
});
