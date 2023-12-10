import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';
import { Loader } from 'shared/ui/Loader';
import { LoginFormAsync as LoginForm } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
	className?: string;
	isOpen: boolean;
	onClose: () => void;
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => {
    const { t } = useTranslation();
    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            // className={classNames(cls.loginmodal, {}, [className])}
            lazy
        >
            <Suspense fallback={<Loader />}>
                <LoginForm />
            </Suspense>
        </Modal>
    );
};
