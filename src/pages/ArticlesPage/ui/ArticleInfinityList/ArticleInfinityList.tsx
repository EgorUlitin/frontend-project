import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArticleList } from '@/entities/Article/ui/ArticleList/ArticleList';
import { Text } from '@/shared/ui/Text/Text';
import {
    getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView,
} from '../../model/selectors/articles';
import { getArticles } from '../../model/slices/articlePageSlice';

interface ArticleInfinityListProps {
  className?: string;
}

export const ArticleInfinityList = memo(({ className }: ArticleInfinityListProps) => {
    const { t } = useTranslation('');

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const error = useSelector(getArticlesPageError);
    const view = useSelector(getArticlesPageView);

    if (error) {
        return <Text title={t('Ошибка загрузки данных')} />;
    }

    return (
        <ArticleList
            isLoading={isLoading}
            view={view}
            articles={articles}
            className={className}
        />
    );
});
