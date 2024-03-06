import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Page } from '@/widgets/Page';

interface AdminPanelPageProps {
    className?: string;
}

export const AdminPanelPage = memo((props: AdminPanelPageProps) => {
    const { className } = props;

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Page data-testid="AdminPanelPage" className={classNames('', {}, [className])}>
            Admin panel
        </Page>
    );
});

export default AdminPanelPage;
