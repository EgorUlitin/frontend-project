import { memo } from 'react';
import { useTranslation } from 'react-i18next';

const ArticleDetailsPage = memo(() => {
    const { t } = useTranslation('articlesDetales');

    return (
        <div>
            {t('Страница деталей')}

        </div>
    );
});

export default memo(ArticleDetailsPage);
