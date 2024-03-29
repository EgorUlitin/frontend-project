import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Text } from '@/shared/ui/Text';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import { getRouteProfile } from '@/shared/const/router';
import { HStack, VStack } from '@/shared/ui/Stack';
import cls from './CommentItem.module.scss';
import { Comment } from '../../model/types/comments';

interface CommentItemProps {
	className?: string;
	comment?: Comment;
	isLoading?: boolean;
}

export const CommentItem = memo(({ className, comment, isLoading }: CommentItemProps) => {
    if (isLoading) {
        return (
            <VStack
                max
                gap="8"
                className={classNames(cls.commentitem, { [cls.loading]: isLoading }, [className])}
                data-testid="CommentItem.Loading"
            >
                <HStack max gap="16" className={cls.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton className={cls.username} width={100} height={16} />
                </HStack>
                <Skeleton className={cls.text} width="100%" height={50} />
            </VStack>
        );
    }

    if (!comment) return null;

    return (
        <VStack max gap="8" className={classNames(cls.commentitem, {}, [className])} data-testid="CommentItem">
            <AppLink to={getRouteProfile(comment.user.id)} className={cls.header}>
                {comment.user.avatar ? <Avatar src={comment.user.avatar} size={30} /> : null}
                <Text className={cls.username} title={comment.user.username} />
            </AppLink>
            <Text className={cls.text} text={comment.text} />
        </VStack>
    );
});
