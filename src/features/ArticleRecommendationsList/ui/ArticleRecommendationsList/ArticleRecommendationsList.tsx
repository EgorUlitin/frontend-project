import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article/ui/ArticleList/ArticleList';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { useGetArticleRecommendationsList } from '../../api/articleRecommendatiosApi';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const { data: artciles, isLoading, error } = useGetArticleRecommendationsList(3);

    if (isLoading || error) {
        return null;
    }

    return (
        <VStack gap="8" className={classNames(cls.ArtcileRecommendationsList, {}, [className])}>
            <Text
                size={TextSize.L}
                className={cls.commentTitle}
                title={t('Рекомендуем')}
            />
            <ArticleList
                articles={artciles}
                isLoading={isLoading}
                className={cls.recommendationsList}
                target="_blank"
            />
        </VStack>
    );
});
