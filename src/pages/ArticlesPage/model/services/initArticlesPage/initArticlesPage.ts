import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';
import {
    getArticlesPageInited,
} from '../../selectors/articles';
import { articlesPageActions } from '../../slices/articlePageSlice';
import { fetchArtcilesList } from '../fetchArticlesList/fetchArticlesList';

export const initArticlesPage = createAsyncThunk<
    void,
    void,
    ThunkConfig<string>
>(
    'articlesPage/initArticlesPage',
    async (_, {
        getState, dispatch,
    }) => {
        const inited = getArticlesPageInited(getState());

        if (!inited) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArtcilesList({ page: 1 }));
        }
    },
);
