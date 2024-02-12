import { HTMLAttributeAnchorTarget, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Text, TextSize } from 'shared/ui/Text/Text';
import {
    List, WindowScroller, ListRowProps,
} from 'react-virtualized';
import { PAGE_ID } from 'widgets/Page/Page';
import cls from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
	className?: string;
	articles: Article[];
	isLoading?: boolean;
	view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
    virtualized?: boolean;
}

const generateSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
    .fill(0)
    .map((_, index) => (
        <ArticleListItemSkeleton key={index} view={view} />
    ));

export const ArticleList = memo(({
    className, articles, isLoading, view = ArticleView.SMALL, target, virtualized = true,
}: ArticleListProps) => {
    const { t } = useTranslation();

    const isBig = view === ArticleView.BIG;

    const itemPerRow = isBig ? 1 : 3;

    const rowCount = isBig ? articles.length : Math.ceil(articles.length / itemPerRow);

    const rowRender = ({
        index, key, style,
    }: ListRowProps) => {
        const items = [];

        const fromIndex = index * itemPerRow;
        const toIndex = Math.min(fromIndex + itemPerRow, articles.length);

        for (let index = fromIndex; index < toIndex; index += 1) {
            items.push(
                <ArticleListItem
                    className={cls.card}
                    article={articles[index]}
                    view={view}
                    target={target}
                    key={`str+${index}`}
                />,
            );
        }

        return (
            <div
                key={key}
                style={style}
                className={cls.row}
            >
                {items}
            </div>
        );
    };

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(cls.articlelist, {}, [className, cls[view]])}>
                <Text size={TextSize.L} title={t('Статьи не найдены')} />
            </div>
        );
    }

    return (
        <WindowScroller
            onScroll={() => {}}
            scrollElement={document.getElementById(PAGE_ID) as Element}
        >
            {({
                height, width, registerChild, onChildScroll, isScrolling, scrollTop,
            }) => (
                <div ref={registerChild} className={classNames(cls.articlelist, {}, [className, cls[view]])}>
                    {isLoading && generateSkeletons(view)}
                    {virtualized
                        ? (
                            <List
                                height={height ?? 700}
                                width={width ? width - 80 : 700}
                                rowCount={rowCount}
                                rowHeight={isBig ? 700 : 330}
                                rowRenderer={rowRender}
                                autoHeight
                                onScroll={onChildScroll}
                                isScrolling={isScrolling}
                                scrollTop={scrollTop}
                            />
                        )
                        : (articles.map((article) => (
                            <ArticleListItem
                                key={article.id}
                                article={article}
                                className={className}
                                view={view}
                                target={target}
                            />
                        )))}

                </div>
            )}
        </WindowScroller>
    );
});
