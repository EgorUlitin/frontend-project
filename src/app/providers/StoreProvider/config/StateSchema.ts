import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject, Dispatch,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ProfileSchema } from 'entities/Profile';
import { UserSchema } from 'entities/User';
import { ArticleDetailsSchema } from 'entities/Article';
import { LoginSchema } from 'features/AuthByUsername';
import { AddCommentFormSchema } from 'features/AddCommentForm/model/types/addCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { ScrollSaveSchems } from 'features/ScrollSave/model/types/ScrollSaveSchema';
import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage/model/types';

export interface StateSchema {
  user: UserSchema;
  // loginForm?: LoginSchema;
  // profile?: ProfileSchema;
  // articleDetails?: ArticleDetailsSchema;
  // articleDetailsPage?: ArticleDetailsPageSchema;
  // addCommentForm?: AddCommentFormSchema;
  // articlesPage?: ArticlesPageSchema;
  scrollSave: ScrollSaveSchems;

// Асинхронные редюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  articleDetails?: ArticleDetailsSchema;
  addCommentForm?: AddCommentFormSchema;
  articlesPage?: ArticlesPageSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedRedusers = OptionalRecord<StateSchemaKey, boolean>;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    // getMountedReducers: () => MountedRedusers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance,
}

export interface ThunkConfig<T> {
  rejectValue: T,
  extra: ThunkExtraArg
  dispatch?: Dispatch
  state: StateSchema
}
