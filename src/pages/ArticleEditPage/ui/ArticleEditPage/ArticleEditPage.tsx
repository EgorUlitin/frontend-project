import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Page } from 'widgets/Page/Page';
import { useParams } from 'react-router-dom';
import cls from './ArticleEditPage.module.scss';

interface ArticleEditPageProps {
  className?: string;
}

const ArticleEditPage = ({ className }: ArticleEditPageProps) => {
    const { t } = useTranslation();
    const { id } = useParams();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.articleeditpage, {}, [className])}>
            { isEdit ? t('Редактирование статьи с ID = ') + id : t('Создание статьи') }
        </Page>
    );
};

export default memo(ArticleEditPage);