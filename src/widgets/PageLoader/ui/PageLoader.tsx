import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader';
import cls from './PageLoder.module.scss';

interface PageLoaderProps {
	className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.pageloader, {}, [className])}>
        <Loader />
    </div>
);

export default PageLoader;
