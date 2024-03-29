import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { DynamicModuleLoader, ReducerList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { HStack } from '@/shared/ui/Stack';
import { getAddCommentFormText } from '../../model/selectors/addCommentFormSelectors';
import { addCommentFormReducer, useAddCommentFormActions } from '../../model/slices/addCommentFormSlice';
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
    const { setText } = useAddCommentFormActions();
    // const error = useSelector(getAddCommentFormError);
    const { t } = useTranslation();

    const onTextChange = useCallback((value: string) => {
        // dispatch(addCommentFormActions.setText(value));
        setText(value);
    }, [setText]);

    const onSendHandler = useCallback(() => {
        onSendComment(text || '');
        onTextChange('');
    }, [onSendComment, onTextChange, text]);

    return (
        <DynamicModuleLoader reducers={redusers}>
            <HStack
                justify="between"
                max
                className={classNames(cls.addcommentform, {}, [className])}
                data-testid="AddCommentForm"
            >
                <Input
                    className={cls.input}
                    placeholder={t('Введите текст комментария')}
                    value={text}
                    onChange={onTextChange}
                    data-testid="AddCommentForm.Input"
                />
                <Button onClick={onSendHandler} data-testid="AddCommentForm.SandButton">{t('Отправить')}</Button>
            </HStack>
        </DynamicModuleLoader>
    );
});

export default AddCommentForm;
