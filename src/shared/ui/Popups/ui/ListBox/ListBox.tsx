import {
    Fragment, ReactNode, memo,
} from 'react';
import { Listbox as HListBox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import cls from './ListBox.module.scss';
import { Button } from '../../../Button/Button';
import { HStack } from '../../../Stack';
import { mapDirection } from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';

interface ListBoxItem {
	value: string;
	content: ReactNode;
	disabled?: boolean;
}

interface ListBoxProps {
  className?: string;
  items?: ListBoxItem[];
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  direction: DropdownDirection;
  label?: string;
}

export const ListBox = memo(({
    className, items, value, defaultValue, onChange, readonly, direction = 'bottom left', label,
}: ListBoxProps) => {
    return (
        <HStack gap="4">
            {label && <span>{`${label} >`}</span>}
            <HListBox
                as="div"
                value={value}
                onChange={onChange}
                className={classNames(cls.listbox, {}, [className, popupCls.popup])}
                disabled={readonly}
            >
                <HListBox.Button
                    className={cls.name}
                >

                    <Button disabled={readonly}>
                        {value ?? defaultValue}
                    </Button>
                </HListBox.Button>
                <HListBox.Options className={classNames(cls.options, {}, [mapDirection[direction]])}>
                    {items?.map((item) => (
                        <HListBox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <li
                                    className={classNames(
                                        cls.item,
                                        {
                                            [popupCls.active]: active,
                                            [popupCls.disabled]: item.disabled,
                                        },
                                    )}
                                >
                                    {selected && '!!! '}
                                    {item.value}
                                </li>
                            )}
                        </HListBox.Option>
                    ))}
                </HListBox.Options>
            </HListBox>
        </HStack>

    );
});
