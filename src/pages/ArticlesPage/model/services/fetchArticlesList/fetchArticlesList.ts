import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import { Article } from 'entities/Article/';
import { FetchArtcilesListProps } from '../../types/articlesPageSchema';
import { getArticlesPageLimit } from '../../selectors/articles';

export const fetchArtcilesList = createAsyncThunk<
    Article[],
    FetchArtcilesListProps,
    ThunkConfig<string>
>(
    'articlesPage/fetchArticlesList',
    async ({ page = 1 }, {
        rejectWithValue, extra, getState,
    }) => {
        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (error) {
            return rejectWithValue('fetchArticlesList error');
        }
    },
);
