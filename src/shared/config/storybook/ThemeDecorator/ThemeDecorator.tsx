import { ReactElement } from 'react';
import 'app/styles/index.scss';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator = ({ children, theme }: { theme: Theme, children: ReactElement}) => (
    <div className={`app ${theme}`}>{children}</div>
);
