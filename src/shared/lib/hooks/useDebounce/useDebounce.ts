import {
    MutableRefObject, useCallback, useRef,
} from 'react';

export const useDebounce = (callback: (...arg: any[]) => void, delay = 500) => {
    const timer = useRef() as MutableRefObject<any>;

    return useCallback((...arg: any[]) => {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = setTimeout(() => {
            callback(...arg);
        }, delay);
    }, [callback, delay]);
};
