import {
    createSlice, createEntityAdapter,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { ArticleDetailsPageRecommendationsSchema } from '../types/articleDetailsPageRecommendationsSchema';
import { fetchArtcilesRecommendationList } from '../services/fetchRecommendationsArticles/fetchRecommendationsArticles';

const recommendationsAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState(),
);

export const articleDetailsPageRecommendationsSlice = createSlice({
    name: 'articleDetailsPageRecommendationsSlice',
    initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArtcilesRecommendationList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArtcilesRecommendationList.fulfilled, (state, action) => {
                state.isLoading = false;

                recommendationsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArtcilesRecommendationList.rejected, (state, action) => {
                state.isLoading = false;

                state.error = action.payload;
            });
    },
});

export const { actions: articleDetailsPageRecommendationsActions } = articleDetailsPageRecommendationsSlice;
export const { reducer: articleDetailsPageRecommendationsReducer } = articleDetailsPageRecommendationsSlice;
