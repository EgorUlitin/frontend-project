import Button from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';

// for testing
export const BugButton = () => {
    const [error, setError] = useState(false);

    const onThrowClick = () => setError(true);

    useEffect(() => {
        if (error) {
            throw new Error('');
        }
    }, [error]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Button onClick={onThrowClick}>
            Bug button
        </Button>
    );
};
