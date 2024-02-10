import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';
import { initArticlesPage } from './initArticlesPage';
import { fetchArtcilesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList.ts');

describe('initArticlePage.test', () => {
    test('with inited true', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: true,
                _inited: true,
            },
        });

        const searchParams = new URLSearchParams();

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(2);
    });
    test('with inited false', async () => {
        const thunk = new TestAsyncThunk(initArticlesPage, {
            articlesPage: {
                page: 2,
                ids: [],
                entities: {},
                limit: 5,
                isLoading: false,
                hasMore: false,
                _inited: false,
            },
        });

        const searchParams = new URLSearchParams();

        await thunk.callThunk(searchParams);

        expect(thunk.dispatch).toBeCalledTimes(4);
        expect(fetchArtcilesList).toBeCalled();
    });
});
