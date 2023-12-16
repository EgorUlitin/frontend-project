import { profileReducer } from 'entities/Profile';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

const redusers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const { t } = useTranslation('main');

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div>
                {t('ProfilePage страница')}
            </div>
        </DynamicModuleLoader>

    );
});

export default ProfilePage;
