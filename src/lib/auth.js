import { redirect } from '@sveltejs/kit';

const COOKIE_NAME = 'signedIn';

const COOKIE_OPTS = {
    httpOnly: true,
    path: '/'
};

export const login = event => event.cookies.set(COOKIE_NAME, 'yes', COOKIE_OPTS);

export const logout = event => event.cookies.delete(COOKIE_NAME, COOKIE_OPTS);

export const isAuthenticated = event => event.cookies.get(COOKIE_NAME) === 'yes';

export const login_required = (event) => {
    const signedIn = event.cookies.get(COOKIE_NAME) === 'yes';
    if (!signedIn) {
        const location = event.url.pathname;
        throw redirect(307, `/sign-in?redirect=${location}`);
    }
    return true;
};
