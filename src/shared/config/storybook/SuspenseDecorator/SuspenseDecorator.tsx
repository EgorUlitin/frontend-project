import {
    ReactNode,
    Suspense,
} from 'react';

export const SuspenseDecorator = ({ children }: { children: ReactNode }) => (
    <Suspense>{children}</Suspense>
);
