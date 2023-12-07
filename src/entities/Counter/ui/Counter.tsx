import { useDispatch, useSelector } from 'react-redux';
import Button from 'shared/ui/Button/Button';
import { StateSchema } from 'app/providers/StoreProvider/config/StateSchema';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';

import cls from './Counter.module.scss';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };

    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button
                data-testid="increment-btn"
                onClick={increment}
            >
                {t('инкримент')}
            </Button>
            <Button
                data-testid="decrement-btn"
                onClick={decrement}
            >
                {t('дикримент')}
            </Button>
        </div>
    );
};
