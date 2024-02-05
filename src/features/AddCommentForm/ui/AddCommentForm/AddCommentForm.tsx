import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/Input';
import Button from 'shared/ui/Button/Button';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from 'shared/ui/Stack';
import { getAddCommentFormError, getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormActions, addCommentFormReducer } from '../../model/slices/addCommentFormSlice';
import cls from './AddCommentForm.module.scss';

interface AddCommentFormProps {
	className?: string;
    onSendComment: (text: string) => void
}

const redusers: ReducerList = {
    addCommentForm: addCommentFormReducer,
};

const AddCommentForm = memo(({ className, onSendComment }: AddCommentFormProps) => {
    const dispatch = useAppDispatch();
    const text = useSelector(getAddCommentFormText);
    // const error = useSelector(getAddCommentFormError);
    const { t } = useTranslation();

    const onTextChange = useCallback((value) => {
        dispatch(addCommentFormActions.setText(value));
    }, [dispatch]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onTextChange('');
    }, [onSendComment, onTextChange, text]);

    return (
        <DynamicModuleLoader reducers={redusers}>
            <HStack justify="between" max className={classNames(cls.addcommentform, {}, [className])}>
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onTextChange}
                />
                <Button onClick={onSendHandler}>{t('Отправить')}</Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
