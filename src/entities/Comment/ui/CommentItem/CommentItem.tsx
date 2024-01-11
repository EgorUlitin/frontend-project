import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import cls from './CommentItem.module.scss';
import { Comment } from '../../model/types/comments';

interface CommentItemProps {
	className?: string;
	comment: Comment;
	isLoading?: boolean;
}

export const CommentItem = memo(({ className, comment, isLoading }: CommentItemProps) => {
    const { t } = useTranslation();
    if (isLoading) {
        return (
            <div className={classNames(cls.commentitem, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton className={cls.username} width={100} height={16} />
                </div>
                <Skeleton className={cls.text} width="100%" height={50} />
            </div>
        );
    }
    return (
        <div className={classNames(cls.commentitem, {}, [className])}>
            <div className={cls.header}>
                {comment.user.avatar ? <Avatar src={comment.user.avatar} size={30} /> : null}
                <Text className={cls.username} title={comment.user.username} />
            </div>
            <Text className={cls.text} text={comment.text} />
        </div>
    );
});