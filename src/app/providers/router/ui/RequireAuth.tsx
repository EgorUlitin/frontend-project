import { getUserAuthData } from 'entities/User';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const isAuth = useSelector(getUserAuthData);

    if (!isAuth) {
        return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }

    return children;
};
