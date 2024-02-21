import { memo, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Select, SelectOptinon } from '@/shared/ui/Select/Select';
import { ArticleSortField } from '@/entities/Article/model/consts/consts';
import { SortOrder } from '@/shared/types';
import cls from './ArticleSortSelector.module.scss';

interface ArticleSortSelectorProps {
	className?: string;
	sort: ArticleSortField;
	order: SortOrder;
	onChangeOrder: (newOrder: SortOrder) => void;
	onChangeSort: (newOrder: ArticleSortField) => void;
}

export const ArticleSortSelector = memo(({
    className,
    sort,
    order,
    onChangeOrder,
    onChangeSort,
}: ArticleSortSelectorProps) => {
    const { t } = useTranslation();

    const orderOption = useMemo<SelectOptinon<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('возрастанию'),
        },
        {
            value: 'desc',
            content: t('убыванию'),
        },
    ], [t]);

    const sortFieldOption = useMemo<SelectOptinon<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('дате создания'),
        },
        {
            value: ArticleSortField.TITLE,
            content: t('названию'),
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('по просмотрам'),
        },
    ], [t]);

    return (
        <div className={classNames(cls.articlesortselector, {}, [className])}>
            <Select
                options={sortFieldOption}
                label={t('Сортировать по')}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                options={orderOption}
                label={t('по')}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
});
