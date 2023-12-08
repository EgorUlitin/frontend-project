import { Modal } from 'shared/ui/Modal/Modal';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '../LoginForm/LoginForm';

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
            <LoginForm />
        </Modal>
    );
};
