import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/Page';
import { Rating } from '@/entities/Rating';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Основная страница')}
            <Rating
                title={t('Как вам статья')}
                feedbackTitle={t('Оставьте отзыв о статье ')}
                hasFeedback
            />
        </Page>
    );
});

export default MainPage;
