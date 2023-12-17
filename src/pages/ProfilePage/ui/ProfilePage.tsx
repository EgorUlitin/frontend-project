import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { memo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

const redusers: ReducerList = {
    profile: profileReducer,
};

const ProfilePage = memo(() => {
    const { t } = useTranslation('main');
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchProfileData());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={redusers} removeAfterUnmount>
            <div>
                <ProfileCard />
            </div>
        </DynamicModuleLoader>

    );
});

export default ProfilePage;
