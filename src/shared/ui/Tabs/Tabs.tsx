import { ReactNode, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleType } from 'entities/Article';
import cls from './Tabs.module.scss';
import { Card, CardTheme } from '../Card/Card';

export interface TabsItem<T extends string> {
	value: T;
	content: ReactNode;
}

interface TabsProps<T extends string> {
  className?: string;
  tabs: TabsItem<T>[];
  value: string;
  onTabClick: (tab: TabsItem<ArticleType>) => void
}

export const Tabs = <T extends string>({
    className, tabs, value, onTabClick,
}: TabsProps<T>) => {
    const clickHandle = useCallback((tab) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.tabs, {}, [className])}>
            {tabs.map((tab) => (
                <Card
                    key={tab.value}
                    className={cls.tab}
                    theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
                    onClick={clickHandle(tab)}
                >
                    {tab.content}
                </Card>
            ))}
        </div>
    );
};
