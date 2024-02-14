import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { TextAlign, Text } from 'shared/ui/Text/Text';
import { ArticleImageBlock } from '../../model/types/article';
import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImagelockComponentProps {
	className?: string;
    block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo(({ className, block }: ArticleImagelockComponentProps) => {
    return (
        <div className={classNames(cls.articleimagelockcomponent, {}, [className])}>
            <img alt={block.title} src={block.src} className={cls.img} />
            {block.title && <Text className={cls.title} text={block.title} align={TextAlign.CENTER} />}
        </div>
    );
});
