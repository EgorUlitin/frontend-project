import { useTheme } from 'app/providers/ThemeProvider';
import {
    ReactNode,
} from 'react';
import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { useModal } from 'shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
  lazy?: boolean;
}

export const Modal = ({
    className, children, isOpen, onClose, lazy,
}: ModalProps) => {
    const { isClosing, isMounted, close } = useModal({ animationDelay: 300, isOpen, onClose });
    const { theme } = useTheme();

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    if (lazy && !isMounted) return null;

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className, theme, 'modal'])}>
                <Overlay onClick={close} />
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
