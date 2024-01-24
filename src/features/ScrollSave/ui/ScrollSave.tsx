import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ScrollSave.module.scss';

interface ScrollSaveProps {
	className?: string;
}

export const ScrollSave = memo(({ className }: ScrollSaveProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.scrollsave, {}, [className])}>
            /
        </div>
    );
});
