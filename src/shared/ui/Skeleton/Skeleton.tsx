import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { CSSProperties } from 'react';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
	className?: string;
	height?: string | number;
	width?: string | number;
	border?: string;
}

export const Skeleton = ({
    className, height, width, border,
}: SkeletonProps) => {
    const { t } = useTranslation();

    const styles: CSSProperties = {
        height,
        width,
        borderRadius: border,
    };

    return (
        <div className={classNames(cls.skeleton, {}, [className])} style={styles} />
    );
};
