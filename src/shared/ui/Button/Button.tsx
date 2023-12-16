import { classNames } from 'shared/lib/classNames/classNames';
import {
    ButtonHTMLAttributes, FC, ReactNode, memo,
} from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted'
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
  disabled?: boolean;
  children?: ReactNode;
}

const Button = memo(({
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    disabled = false,
    ...otherProps
}: ButtonProps) => {
    const mods: Record<string, boolean> = {
        [cls[theme]]: true,
        [cls.square]: square,
        [cls[size]]: true,
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.button, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
});

export default Button;
