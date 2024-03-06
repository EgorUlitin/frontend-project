import {
    DetailedHTMLProps, ImgHTMLAttributes, ReactElement, memo,
    useLayoutEffect,
    useState,
} from 'react';

interface AppImageProps extends DetailedHTMLProps<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement> {
  className?: string;
  src: string;
  alt?: string;
  fallback: ReactElement;
  errorFallback?: ReactElement;
}

export const AppImage = memo(({
    className,
    src,
    alt = 'image',
    fallback,
    errorFallback,
    ...otherProps
}: AppImageProps) => {
    const [isLoading, setIstLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    useLayoutEffect(() => {
        const img = new Image();

        img.src = src ?? '';

        img.onload = () => {
            setIstLoading(false);
        };
        img.onerror = () => {
            setIstLoading(false);
            setHasError(true);
        };
    }, [src]);

    if (isLoading && fallback) {
        return fallback;
    }

    if (hasError && errorFallback) {
        return errorFallback;
    }

    return (
        <img src={src} alt={alt} className={className} {...otherProps} />
    );
});
