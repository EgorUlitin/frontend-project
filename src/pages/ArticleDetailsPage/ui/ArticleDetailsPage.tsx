import { ArticleDetails } from 'entities/Article';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';

interface ArticleDetailsPageProps {
	className?: string;
}

const ArticleDetailsPage = memo(({ className }: ArticleDetailsPageProps) => {
    const { t } = useTranslation('articlesDetales');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames('', {}, [className])}>{t('Статья не найдена')}</div>
        );
    }

    return (
        <div>
            <ArticleDetails id={id} />
        </div>
    );
});

export default memo(ArticleDetailsPage);
