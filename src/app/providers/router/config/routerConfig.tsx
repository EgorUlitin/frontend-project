import { UserRole } from '@/entities/User';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { MainPage } from '@/pages/MainPage';
import { AboutPage } from '@/pages/AboutPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailsPage } from '@/pages/ArticleDetailsPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { ForbiddenPage } from '@/pages/ForbiddenPage';
import {
    AppRoutes,
    getRouteAbout,
    getRouteAdminPanel,
    getRouteArticleCreate,
    getRouteArticleDetails,
    getRouteArticles,
    getRouteEdit,
    getRouteForbidden,
    getRouteMain,
    getRouteNotFound,
    getRouteProfile,
} from '@/shared/const/router';
import { AppRouteProps } from '@/shared/types/router';

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: getRouteMain(),
        element: <MainPage />,
    },
    [AppRoutes.ABOUT]: {
        path: getRouteAbout(),
        element: <AboutPage />,
    },
    [AppRoutes.PROFILE]: {
        path: getRouteProfile(':id'),
        element: <ProfilePage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: getRouteArticles(),
        element: <ArticlesPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: getRouteArticleDetails(':id'),
        element: <ArticleDetailsPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_CREATE]: {
        path: getRouteArticleCreate(),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ARTICLES_EDIT]: {
        path: getRouteEdit(':id'),
        element: <ArticleEditPage />,
        authOnly: true,
    },
    [AppRoutes.ADMIN_PANEL]: {
        path: getRouteAdminPanel(),
        element: <AdminPanelPage />,
        authOnly: true,
        roles: [UserRole.MANAGER, UserRole.ADMIN],
    },
    [AppRoutes.FORBIDDEN]: {
        path: getRouteForbidden(),
        element: <ForbiddenPage />,
    },
    [AppRoutes.NOT_FOUND]: {
        path: getRouteNotFound(),
        element: <NotFoundPage />,
    },
};
