export {
    userReducer,
    userActions,
} from './model/slice/userSlice';

export type {
    User,
    UserSchema,
} from './model/types/user';

export { getUserAuthData } from './model/selectors/authUserData/authUserData';
export { getUserInited } from './model/selectors/getUserInited/getUserInited';
export { getUserRoles, isUserAdmin, isUserManager } from './model/selectors/roleSelectors';

export { UserRole } from './model/consts/consts';
