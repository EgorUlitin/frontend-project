import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={classNames(cls.links)}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          className={cls.mainLink}
          to={'/'}
        >
          Главная
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
          О Сайте
        </AppLink>
      </div>
    </div>
  );
};

export default Navbar;
