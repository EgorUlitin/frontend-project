import { ArticleDetails } from 'entities/Article';
import { CommentList } from 'entities/Comment';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useSelector } from 'react-redux';
import { useInitialEffect } from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { AddCommentForm } from 'features/AddCommentForm/index';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Page } from 'widgets/Page/Page';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import cls from './ArticleDetailsPage.module.scss';
import { getArticleComments } from '../model/slices/articleDetailsCommentsSlice';
import { getArticleDetailsCommentsIsLoading } from '../model/selectors/comments';
import { fetchCommentsByArticleId } from '../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId';
import { addCommentForArticle } from '../model/services/addCommentForArticle/addCommentForArticle';
import {
    getArticleRecommendations,
} from '../model/slices/articleDetailsPageRecommendationsSlice';
import { getArticleRecommendationsIsLoading } from '../model/selectors/recommendations';
import { fetchArtcilesRecommendationList }
    from '../model/services/fetchRecommendationsArticles/fetchRecommendationsArticles';
import { articleDetailsPageReducer } from '../model/slices';

interface ArticleDetailsPageProps {
	className?: string;
}

const redusers: ReducerList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const dispatch = useAppDispatch();
    const { t } = useTranslation('articlesDetales');
    const { id } = useParams<{id: string}>();

    const comments = useSelector(getArticleComments.selectAll);
    const isLoadingComments = useSelector(getArticleDetailsCommentsIsLoading);

    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const isLoadingRecommendations = useSelector(getArticleRecommendationsIsLoading);

    const navigate = useNavigate();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArtcilesRecommendationList());
    });

    const onSendComment = useCallback((text) => {
        dispatch(addCommentForArticle(text));
    }, [dispatch]);

    const onBackTiList = useCallback(() => {
        navigate(RoutePath.articles);
    }, [navigate]);

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>{t('Статья не найдена')}</div>
        );
    }

    return (
        <DynamicModuleLoader reducers={redusers}>
            <Page className={classNames(cls.articledetailspage, {}, [className])}>
                <Button onClick={onBackTiList} theme={ButtonTheme.OUTLINE}>
                    {t('Назад к списку')}
                </Button>
                <ArticleDetails id={id} />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Рекомендуем')} />
                <ArticleList
                    articles={recommendations}
                    isLoading={isLoadingRecommendations}
                    className={cls.recommendationsList}
                    target="_blank"
                />
                <Text size={TextSize.L} className={cls.commentTitle} title={t('Комментарии')} />
                <AddCommentForm onSendComment={onSendComment} />
                <CommentList
                    comments={comments}
                    isLoading={isLoadingComments}
                />
            </Page>
        </DynamicModuleLoader>
    );
});

export default memo(ArticleDetailsPage);
