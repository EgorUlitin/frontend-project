import React from 'react';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
// import { BugButton } from 'widgets/PageError';

const MainPage = () => {
    const { t } = useTranslation('main');
    return (
        <div>
            {t('Основная страница')}
            {/* <Button theme={ThemeButton.OUTLINE}>My button main</Button> */}
        </div>
    );
};

export default MainPage;
