import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme, Theme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg?react';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react';
import GreenIcon from '@/shared/assets/icons/theme-green.svg?react';
import Button, { ButtonTheme } from '@/shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}
const map = {
    [Theme.DARK]: <LightIcon />,
    [Theme.LIGHT]: <GreenIcon />,
    [Theme.GREEN]: <DarkIcon />,
};

export const ThemeSwitcher = memo(({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames('', {}, [className])}
            onClick={toggleTheme}
        >
            {map[theme]}
        </Button>
    );
});
