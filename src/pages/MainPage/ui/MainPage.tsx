import React from 'react';
import { useTranslation } from 'react-i18next';
import { BugButton } from 'widgets/PageError';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Основная страница')}
            <BugButton />
        </div>
    );
};

export default MainPage;
