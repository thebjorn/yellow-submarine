import { redirect } from '@sveltejs/kit';

const COOKIE_OPTS = {
    httpOnly: true,
    path: '/'
};
export const login = (event) => {
    event.cookies.set('signedIn', 'yes', COOKIE_OPTS);
};

export const logout = (event) => {
    event.cookies.delete('signedIn', COOKIE_OPTS);
};

export const gateAuthenticated = (event) => {
    const signedIn = event.cookies.get('signedIn') === 'yes';
    if (!signedIn) {
        const location = event.url.pathname;
        throw redirect(307, `/sign-in?redirect=${location}`);
    }
    return true;
};
