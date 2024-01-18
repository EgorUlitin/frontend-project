import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Icon } from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-20-20.svg';
import { Text } from 'shared/ui/Text/Text';
import { Card } from 'shared/ui/Card/Card';
import { useHover } from 'shared/lib/hooks/useHover/useHover';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import cls from './ArticleListItem.module.scss';
import {
    Article, ArticleTextBlock, ArticleView, BlockType,
} from '../../model/types/article';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';

interface ArticleListItemProps {
	className?: string;
	article: Article;
	view?: ArticleView;
}

export const ArticleListItem = memo(({ className, article, view = ArticleView.SMALL }: ArticleListItemProps) => {
    const { t } = useTranslation();
    const [isHover, bindHover] = useHover();
    const navigate = useNavigate();

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id);
    }, [article.id, navigate]);

    const types = <Text text={article.type.join(', ')} className={cls.types} />;
    const views = (
        <>
            <Text text={String(article.views)} className={cls.views} />
            <Icon Svg={EyeIcon} />

        </>
    );

    if (view === ArticleView.BIG) {
        const textBlock = article.blocks.find(
            (block) => block.type === BlockType.TEXT,
        ) as ArticleTextBlock;
        return (
            <div className={classNames(cls.articlelistitem, {}, [className, cls[view]])}>
                <Card className={cls.card}>
                    <div className={cls.header}>
                        <Avatar size={30} src={article.user.avatar || ''} />
                        <Text text={article.user.username} className={cls.username} />
                        <Text text={article.createdAt} className={cls.date} />
                    </div>
                    <Text title={article.title} className={cls.title} />
                    {types}
                    <img src={article.img} className={cls.img} alt={article.title} />
                    {textBlock && (
                        <ArticleTextBlockComponent className={cls.textBlock} block={textBlock} />
                    )}
                    <div className={cls.footer}>
                        <Button onClick={onOpenArticle} theme={ButtonTheme.OUTLINE}>
                            {t('Читать далее...')}
                        </Button>
                        {views}
                    </div>
                </Card>
            </div>
        );
    }

    return (
        <div {...bindHover} className={classNames(cls.articlelistitem, {}, [className, cls[view]])}>
            <Card onClick={onOpenArticle}>
                <div className={cls.imageWrapper}>
                    <img className={cls.img} src={article.img} alt={article.title} />
                    <Text text={article.createdAt} className={cls.date} />
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text title={article.title} className={cls.title} />
            </Card>
        </div>
    );
});