import { memo } from 'react';
import ListIcon from '@/shared/assets/icons/list-24-24.svg?react';
import TilesIcon from '@/shared/assets/icons/tiled-24-24.svg?react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleView } from '@/entities/Article';
import { Icon } from '@/shared/ui/Icon';
import { Button, ButtonTheme } from '@/shared/ui/Button';
import cls from './ArticleViewSelector.module.scss';

interface ArticleViewSelectorProps {
	className?: string;
	view: ArticleView;
	onViewClick: (view: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.SMALL,
        icon: TilesIcon,
    },
    {
        view: ArticleView.BIG,
        icon: ListIcon,
    },
];

export const ArticleViewSelector = memo(({ className, view, onViewClick }: ArticleViewSelectorProps) => {
    const onClick = (view: ArticleView) => () => {
        onViewClick(view);
    };

    return (
        <div className={classNames('', {}, [className])}>
            {viewTypes.map((v, i) => (
                <Button
                    key={v.view}
                    theme={ButtonTheme.CLEAR}
                    onClick={onClick(v.view)}
                >
                    <Icon Svg={v.icon} className={classNames('', { [cls.notSelected]: v.view !== view })} />
                </Button>
            ))}
        </div>
    );
});
