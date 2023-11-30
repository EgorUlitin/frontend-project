import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

const Button: FC<ButtonProps> = ({
    className,
    children,
    theme,
    ...otherProps
}) => (
    <button
        type="button"
        className={classNames(cls.button, {}, [className, cls[theme]])}
        {...otherProps}
    >
        {children}
    </button>
);

export default Button;
