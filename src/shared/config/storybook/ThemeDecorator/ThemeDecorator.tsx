/* eslint-disable ulitin-frontend-plugin/fsd-layer-imports */
import { ReactElement } from 'react';
import '@/app/styles/index.scss';
import { ThemeProvider } from '@/app/providers/ThemeProvider';
import { Theme } from '@/shared/const/theme';

export const ThemeDecorator = ({ children, theme }: { theme: Theme, children: ReactElement}) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>{children}</div>
    </ThemeProvider>
);
