import {
    MutableRefObject, ReactNode, memo, useCallback, useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { useInfinityScroll } from 'shared/lib/hooks/useInfinityScroll/useInfinityScroll';
import cls from './Page.module.scss';

interface PageProps {
  className?: string;
  children: ReactNode;
  onScrollEnd?: () => void;
}

export const Page = memo(({ className, children, onScrollEnd }: PageProps) => {
    const { t } = useTranslation();
    const wrapperRef = useRef() as MutableRefObject<HTMLDivElement>;
    const triggerRef = useRef() as MutableRefObject<HTMLDivElement>;

    useInfinityScroll({
        callback: onScrollEnd,
        wrapperRef,
        triggerRef,
    });

    return (
        <section ref={wrapperRef} className={classNames(cls.page, {}, [className])}>
            {children}
            <div ref={triggerRef} />
        </section>
    );
});
