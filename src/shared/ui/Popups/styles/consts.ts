import { DropdownDirection } from '../../../types/ui';
import cls from './popup.module.scss';

export const mapDirection: Record<DropdownDirection, string> = {
    'top rigth': cls.topRigth,
    'top left': cls.topLeft,
    'bottom rigth': cls.bottomRigth,
    'bottom left': cls.bottomLeft,
};
