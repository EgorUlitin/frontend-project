import {
    ReactNode,
} from 'react';
// eslint-disable-next-line ulitin-frontend-plugin/fsd-layer-imports
import '@/app/styles/index.scss';

export const StyleDecorator = ({ children }: { children: ReactNode}) => (
    <div>{children}</div>
);
