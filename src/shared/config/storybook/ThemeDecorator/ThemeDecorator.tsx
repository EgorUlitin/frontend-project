import { ReactElement } from 'react';
import 'app/styles/index.scss';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = ({ children, theme }: { theme: Theme, children: ReactElement}) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>{children}</div>
    </ThemeProvider>
);
