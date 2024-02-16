import { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Card, CardTheme } from 'shared/ui/Card/Card';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { Notification } from '../../model/types/notification';
import cls from './NotificationItem.module.scss';

interface NotificationItemProps {
  className?: string;
  notification: Notification;
}

export const NotificationItem = memo(({ className, notification }: NotificationItemProps) => {
    const content = (
        <Card
            theme={CardTheme.OUTLINED}
            className={classNames(cls.notificationitem, {}, [className])}
        >
            <Text
                title={notification.title}
                text={notification.description}
            />

        </Card>
    );

    if (notification.href) {
        return (
            <AppLink
                to={notification.href}
                target="_blank"
                className={cls.link}
            >
                {content}
            </AppLink>
        );
    }
    return content;
});
