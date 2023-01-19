export const APP_API_URL = 'https://api.jikan.moe/v4'
export const BAD_USE_CONTEXT = 'ne peut pas être utilisé sans'
export const ENV_DEV = 'development'
export const AUTH_USER_NOT_FOUND = 'auth/user-not-found'
export const AUTH_WRONG_PASSWORD = 'auth/wrong-password'
export const AUTH_TOO_MANY_REQUEST = 'auth/too-many-requests'
export const AUTH_USER_ALREADY_EXIST = 'auth/credential-already-in-use'
export const AUTH_EMAIL_EXISTS = 'auth/email-already-in-use'
export const IDLE = 'idle'
export const LOADING = 'loading'
export const SUCCESS = 'success'
export const FAIL = 'fail'
export const SIGN_IN = 'signIn'
export const SIGN_UP = 'signUp'
export const USER_COLLECTION = 'users'
export const LIGHT = 'light'
export const DARK = 'dark'
export const THEME_COLOR_LOCAL_STORAGE = 'themeColor'
export const ANIME = 'anime'
export const MANGA = 'manga'
export const INFOS = 'infos'
export const NEWS = 'news'
export const RECOMMENDATIONS = 'recommendations'
export const ROUTE_HOME = '/'
export const ROUTE_LOGIN_REGISTER = '/login'
export const ROUTE_PROFILE = '/profile'
export const ROUTE_TOP_ANIME = `/${ANIME}/top`
export const ROUTE_TOP_MANGA = `/${MANGA}/top`
export const ROUTE_SEARCH_ANIME = `/${ANIME}/search`
export const ROUTE_SEARCH_MANGA = `/${MANGA}/search`
export const ROUTE_RECOMMENDATIONS = `/:type/${RECOMMENDATIONS}/:id`
export const ROUTE_NEWS = `/:type/${NEWS}/:id`
export const ROUTE_INFOS = `/:type/${INFOS}/:id`
export const ROUTE_404 = '*'
export const JIKAN_API = process.env.REACT_APP_JIKAN_API
