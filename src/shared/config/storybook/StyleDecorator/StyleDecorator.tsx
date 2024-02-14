import {
    ReactNode,
} from 'react';
import 'app/styles/index.scss';

export const StyleDecorator = ({ children }: { children: ReactNode}) => (
    <div>{children}</div>
);
