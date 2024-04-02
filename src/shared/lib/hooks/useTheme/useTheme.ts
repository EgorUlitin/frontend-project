import { useContext } from 'react';
import { Theme, UseThemeResult } from '../../../const/theme';

import { LOCAL_STORAGE_THEME_KEY } from '@/shared/const/localStorage';
import { ThemeContext } from '../../context/ThemeContext';

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;

        switch (theme) {
            case Theme.DARK:
                newTheme = Theme.LIGHT;
                break;
            case Theme.LIGHT:
                newTheme = Theme.GREEN;
                break;
            case Theme.GREEN:
                newTheme = Theme.DARK;
                break;
            default:
                newTheme = Theme.LIGHT;
                break;
        }

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
        setTheme?.(newTheme);
        document.body.className = newTheme;
    };

    return { theme: theme || Theme.LIGHT, toggleTheme };
}
