import { TestAsyncThunk } from '@/shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { fetchCommentsByArticleId } from './fetchCommentsByArticleId';

const data = [
    {
        id: '1',
        user: {
            id: '1',
            username: 'testuser',
        },
        text: 'test comment 1',
    },
    {
        id: '2',
        user: {
            id: '2',
            username: 'testuser2',
        },
        text: 'test comment 2',
    },
];

describe('fetchProfileData.test', () => {
    test('succes fetching', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ data }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error fetching', async () => {
        const thunk = new TestAsyncThunk(fetchCommentsByArticleId);
        thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk('1');

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
});
