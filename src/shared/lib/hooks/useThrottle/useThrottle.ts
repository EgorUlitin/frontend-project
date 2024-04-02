import { useCallback, useRef } from 'react';

export const useThrottle = (
    callback: (...arg: any[]) => void,
    delay: number,
) => {
    const throllteRef = useRef(false);

    return useCallback(
        (...arg: any[]) => {
            if (!throllteRef.current) {
                callback(...arg);
                throllteRef.current = true;

                setTimeout(() => {
                    throllteRef.current = false;
                }, delay);
            }
        },
        [callback, delay],
    );
};
