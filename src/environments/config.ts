// config.ts
export const API_BASE_URL = 'http://api-le-royaume-des-champignons.com/api/v1/'; // DEV
//export const API_BASE_URL = 'http://192.168.1.23:8080/le-royaume-des-champignons/api/v1/'; // PROD

export const API_ADMIN_BASE_URL =  API_BASE_URL + 'admin/';

export const API_URL_AUTH = API_BASE_URL + 'auth/';

export const API_URL_GET_FILE = API_BASE_URL + 'upload/';

// SERVEUR DE FICHIERS, UPLOAD FILE BY REQUEST.
export const API_URL_GET_FILE_MUSHROOM = API_BASE_URL + 'upload/mushrooms/';
export const API_URL_GET_FILE_EDIBILITY = API_BASE_URL + 'upload/edibility/';
export const API_URL_GET_FILE_LAMELLATYPE = API_BASE_URL + 'upload/lamellatype/';
export const API_URL_GET_FILE_USER = API_BASE_URL + 'upload/users/';

// PUBLIC ACCES
export const PUBLIC_BASE_URL = 'http://api-le-royaume-des-champignons.com/upload/';  // DEV
//export const PUBLIC_BASE_URL = 'http://192.168.1.23:8080/le-royaume-des-champignons/upload/';  // PROD

export const PUBLIC_URL_GET_FILE_MUSHROOM = PUBLIC_BASE_URL + 'mushrooms/';
export const PUBLIC_URL_GET_FILE_EDIBILITY = PUBLIC_BASE_URL + 'edibility/';
export const PUBLIC_URL_GET_FILE_LAMELLATYPE = PUBLIC_BASE_URL + 'lamellatype/';
export const PUBLIC_URL_GET_FILE_USER = PUBLIC_BASE_URL + 'users/';
