import { StateSchema } from 'app/providers/StoreProvider';
import { getArticleDetailsCommentsIsLoading, getArticleDetailsCommentsError } from './comments';

describe('articleDetailsComments.test', () => {
    test('getAddCommentFormText should return true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: { isLoading: true },
            },
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('getAddCommentFormError should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsPage: {
                comments: {
                    error: 'test error',
                },
            },
        };
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual('test error');
    });
});
