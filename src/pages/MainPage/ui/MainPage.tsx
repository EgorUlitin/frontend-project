import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Dropdown } from 'shared/ui/Dropdown/Dropdown';
import { ListBox } from 'shared/ui/ListBox/ListBox';
import { HStack } from 'shared/ui/Stack';
import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <Page>
            {t('Основная страница')}
        </Page>
    );
});

export default MainPage;
