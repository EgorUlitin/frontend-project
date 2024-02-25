import { memo, useState } from 'react';
import { Mods, classNames } from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import { Icon } from '../Icon/Icon';
import Star from '../../assets/icons/star.svg?react';

interface StarRatingProps {
  className?: string;
  size?: number;
  selectedStar?: number;
  onSelect?: (starsCount: number) => void;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo(({
    className, size = 30, selectedStar = 0, onSelect,
}: StarRatingProps) => {
    const [currentHoveredStar, setCurrentHoveredStar] = useState(selectedStar);
    const [isSelected, setIsSelected] = useState(Boolean(selectedStar));

    const onHover = (starNumber: number) => () => {
        if (!isSelected) {
            setCurrentHoveredStar(starNumber);
        }
    };

    const onLeave = () => {
        if (!isSelected) {
            setCurrentHoveredStar(0);
        }
    };

    const onClick = (starNumber: number) => () => {
        if (!isSelected) {
            onSelect?.(starNumber);
            setCurrentHoveredStar(starNumber);
            setIsSelected(true);
        }
    };

    return (
        <div>
            {stars.map((startNumber) => {
                const mods: Mods = {
                    [cls.isHovered]: startNumber <= currentHoveredStar,
                    [cls.isSelected]: isSelected,
                };
                return (
                    <Icon
                        className={classNames(cls.starrating, mods, [className])}
                        key={startNumber}
                        Svg={Star}
                        width={size}
                        height={size}
                        onMouseOver={onHover(startNumber)}
                        onMouseLeave={onLeave}
                        onClick={onClick(startNumber)}
                    />
                );
            })}
        </div>
    );
});
