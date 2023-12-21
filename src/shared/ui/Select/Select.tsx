import { useTranslation } from 'react-i18next';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
import cls from './Select.module.scss';

export interface SelectOptinon {
    value: string;
    content: string;
}

interface SelectProps {
	className?: string;
    label?: string;
    options?: SelectOptinon[];
    value?: string;
    readonly?: boolean;
    onChange?: (value: string) => void;
}

export const Select = ({
    className, label, options, value, onChange, readonly,
}: SelectProps) => {
    const { t } = useTranslation();

    const optionList = useMemo(() => options?.map((opt) => (
        <option
            className={cls.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value);
    };

    const mods: Mods = {};

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && <span className={cls.label}>{`${label}>`}</span>}
            <select
                disabled={readonly}
                className={cls.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionList}
            </select>
        </div>
    );
};
