import { AuthProvider } from 'react-admin';

const authProvider: AuthProvider = {
    login: async ({ username, password }) => {
        // Call your local login API to get the bearer token
        const response = await fetch('http://localhost:5013/api/Auth/Login', {
            method: 'POST',
            body: JSON.stringify({
                username,
                password
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.status == 200) {
            const { token } = await response.json();
            localStorage.setItem('token', token);

            return Promise.resolve();
        } else {
            return Promise.reject(new Error('Invalid login'));
        }
    },
    logout: async () => {
        localStorage.removeItem('token');
        return Promise.resolve();
    },
    checkAuth: () => {
        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    },
    checkError: () => {
        return Promise.resolve();
    },
    getPermissions: () => {
        return Promise.resolve();
    },
};

export default authProvider;