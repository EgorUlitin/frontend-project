import { Fragment, ReactNode, memo } from 'react';
import { Menu } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../../../AppLink/AppLink';
import { mapDirection } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
  className?: string;
  items: DropdownItem[];
  trigger: ReactNode;
  direction: DropdownDirection;
}

export const Dropdown = memo(({
    className, trigger, items, direction,
}: DropdownProps) => {
    return (
        <Menu as="div" className={classNames(cls.dropdown, {}, [className, popupCls.popup])}>
            <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [mapDirection[direction]])}>
                {items.map(({
                    disabled, content, onClick, href,
                }, i) => {
                    const item = ({ active }: { active: boolean}) => (
                        <button
                            type="button"
                            className={classNames(cls.item, { [popupCls.active]: active })}
                            onClick={onClick}
                            disabled={disabled}
                        >
                            {content}
                        </button>
                    );

                    if (href) {
                        return (
                            <Menu.Item key={`dropdown-key${i}`} as={AppLink} to={href} disabled={disabled}>
                                {item}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={`dropdown-key${i}`} as={Fragment} disabled={disabled}>
                            {item}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
