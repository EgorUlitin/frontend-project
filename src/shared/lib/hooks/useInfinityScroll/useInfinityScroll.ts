import { MutableRefObject, useEffect } from 'react';

export interface UseInfinityScrollProps {
    callback?: () => void;
    wrapperRef: MutableRefObject<HTMLElement>;
    triggerRef: MutableRefObject<HTMLElement>;
}

export const useInfinityScroll = ({ callback, wrapperRef, triggerRef }: UseInfinityScrollProps) => {
    useEffect(() => {
        const wrapperElement = wrapperRef.current;
        const triggerElement = triggerRef.current;

        const options = {
            root: wrapperElement,
            rootMargin: '0px',
            threshold: 1.0,
        };
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    callback?.();
                }
            },
            options,
        );

        observer.observe(triggerElement);
        return () => {
            if (observer && triggerElement) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(triggerElement);
            }
        };
    }, [callback, triggerRef, wrapperRef]);
};
