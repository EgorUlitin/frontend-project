import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        location.reload();
    };

    return (
        <div className={classNames(cls.pageerror, {}, [className])}>
            <p>{t('Что-то пошло нет так =(')}</p>
            <Button
                theme={ButtonTheme.OUTLINE}
                onClick={reloadPage}
            >
                {t('Обновить Страницу')}

            </Button>
        </div>
    );
};
