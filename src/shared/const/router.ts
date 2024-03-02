export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
	PROFILE = 'profile',
	ARTICLES = 'articles',
	ARTICLES_DETAILS = 'article_details',
	ARTICLES_CREATE = 'article_create',
	ARTICLES_EDIT = 'article_edit',
	ADMIN_PANEL = 'admin_panel',
	FORBIDDEN = 'forbidden',
	NOT_FOUND = 'notfound'
}

export const getRouteMain = () => '/';
export const getRouteAbout = () => '/about';
export const getRouteProfile = (id: string) => `/profile/${id}`;
export const getRouteArticles = () => '/articles';
export const getRouteArticleDetails = (id: string) => `/articles/${id}`;
export const getRouteArticleCreate = () => '/articles/new';
export const getRouteEdit = (id: string) => `/articles/${id}/edit`;
export const getRouteAdminPanel = () => '/admin';
export const getRouteForbidden = () => '/forbidden';
export const getRouteNotFound = () => '*';
