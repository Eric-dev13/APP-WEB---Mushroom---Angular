// config.ts
export const API_BASE_URL = 'http://localhost:9000/api/v1/';

export const API_ADMIN_BASE_URL =  API_BASE_URL +'admin/';

export const API_URL_AUTH = API_BASE_URL + 'auth/';

// Serveur de fichiers, peux être sécurisé.
export const API_URL_GET_FILE_MUSHROOM = API_BASE_URL + 'upload/mushrooms/';
export const API_URL_GET_FILE_EDIBILITY = API_BASE_URL + 'upload/edibility/';
export const API_URL_GET_FILE_LAMELLATYPE = API_BASE_URL + 'upload/lamellatype/';
export const API_URL_GET_FILE_USER = API_BASE_URL + 'upload/users/';

// Acces publique
export const PUBLIC_BASE_URL = 'http://localhost:9000/upload/';
export const PUBLIC_URL_GET_FILE_MUSHROOM = PUBLIC_BASE_URL + 'mushrooms/';
export const PUBLIC_URL_GET_FILE_EDIBILITY = PUBLIC_BASE_URL + 'edibility/';
export const PUBLIC_URL_GET_FILE_LAMELLATYPE = PUBLIC_BASE_URL + 'lamellatype/';
export const PUBLIC_URL_GET_FILE_USER = PUBLIC_BASE_URL + 'users/';
