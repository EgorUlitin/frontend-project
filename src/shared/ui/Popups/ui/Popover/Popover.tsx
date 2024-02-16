import {
    ReactNode, memo,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Popover as HPopover } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import { mapDirection } from '../../styles/consts';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    direction?: DropdownDirection;
    trigger: ReactNode;
    children?: ReactNode;
}

export const Popover = memo(({
    trigger, className, direction = 'bottom left', children,
}: PopoverProps) => {
    const mapClasses = mapDirection[direction];

    return (
        <HPopover className={classNames(cls.popover, {}, [className, popupCls.popup])}>
            <HPopover.Button
                className={popupCls.trigger}
            >
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, [mapClasses])}>
                {children}
            </HPopover.Panel>
        </HPopover>

    );
});
