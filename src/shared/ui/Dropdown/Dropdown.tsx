import { Fragment, ReactNode, memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import cls from './Dropdown.module.scss';
import { AppLink } from '../AppLink/AppLink';

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

const mapDirection: Record<DropdownDirection, string> = {
    'top rigth': cls.topRigth,
    'top left': cls.topLeft,
    'bottom rigth': cls.bottomRigth,
    'bottom left': cls.bottomLeft,
};

export const Dropdown = memo(({
    className, trigger, items, direction,
}: DropdownProps) => {
    return (
        <Menu as="div" className={classNames(cls.dropdown, {}, [className])}>
            <Menu.Button className={cls.btn}>{trigger}</Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, [mapDirection[direction]])}>
                {items.map(({
                    disabled, content, onClick, href,
                }, i) => {
                    const item = ({ active }: { active: boolean}) => (
                        <button
                            type="button"
                            className={classNames(cls.item, { [cls.active]: active })}
                            onClick={onClick}
                            disabled={disabled}
                        >
                            {content}
                        </button>
                    );

                    if (href) {
                        return (
                            <Menu.Item key={i} as={AppLink} to={href} disabled={disabled}>
                                {item}
                            </Menu.Item>
                        );
                    }

                    return (
                        <Menu.Item key={i} as={Fragment} disabled={disabled}>
                            {item}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
