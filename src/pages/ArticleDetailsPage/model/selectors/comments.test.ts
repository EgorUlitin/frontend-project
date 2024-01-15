import { StateSchema } from 'app/providers/StoreProvider';
import { isLoading } from 'entities/Comment/ui/CommentList/CommentList.stories';
import { getArticleDetailsCommentsIsLoading, getArticleDetailsCommentsError } from './comments';

describe('articleDetailsComments.test', () => {
    test('getAddCommentFormText should return true', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: { isLoading: true },
        };
        expect(getArticleDetailsCommentsIsLoading(state as StateSchema)).toEqual(true);
    });

    test('getAddCommentFormError should return error', () => {
        const state: DeepPartial<StateSchema> = {
            articleDetailsComments: {
                error: 'test error',
            },
        };
        expect(getArticleDetailsCommentsError(state as StateSchema)).toEqual('test error');
    });
});
