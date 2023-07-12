const BASE_URL = 'https://jsonplaceholder.typicode.com';
export const USERS = {
    USERS: () => `${BASE_URL}/users/`,
    USER_BY_ID: (id) => `${BASE_URL}/users/${id}`,
};
