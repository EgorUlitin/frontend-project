import { HTMLAttributes, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Card.module.scss';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

export const Card = memo(({ className, children, ...otherProps }: CardProps) => (
    <div className={classNames(cls.card, {}, [className])} {...otherProps}>
        {children}
    </div>
));
