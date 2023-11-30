import {
    FC,
} from 'react';
import 'app/styles/index.scss';

export const StyleDecorator: FC = ({ children }) => (
    <div>{children}</div>
);
