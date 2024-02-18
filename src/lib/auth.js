import { goto } from '$app/navigation';
import { redirect } from '@sveltejs/kit';

export const LOGOUT_REDIRECT_URL = '/goodbye';
export const LOGIN_REDIRECT_URL = '/launch-codes-fixed';
export const LOGIN_URL = '/login';
export const LOGOUT_URL = '/logout';

export const COOKIE_NAME = 'signedIn';

const COOKIE_OPTS = {
    httpOnly: true,
    path: '/'
};

export const login = event => {
    event.cookies.set(COOKIE_NAME, 'yes', COOKIE_OPTS);

    // call the database to create a session (hmm.. server code?)
    // ...

    // notify the presence channel to say hello
    // ...
}

export const isAuthenticated = event => event.cookies?.get(COOKIE_NAME) === 'yes';


export const logout = event => {
    console.log('auth.js:logout:', event.request.method)
    const signedIn = isAuthenticated(event);
    if (signedIn) {
        const cookie_value = event.cookies.get(COOKIE_NAME);
        console.log('auth.js:logout::cookie_value:', cookie_value);
        // remove the cookie
        event.cookies.delete(COOKIE_NAME, COOKIE_OPTS);

        // call the database to invalidate the session (hmm.. server code?)
        // ...

        // notify the presence channel to say goodbye
        // ...

        // this happens in the form action of /logout (can't call goto 
        // from server-side code)
        // throw redirect(303, LOGOUT_REDIRECT_URL);
        // goto(LOGOUT_REDIRECT_URL, {
        //     replaceState: true,
        //     invalidateAll: true,
        // });
    }
}


export const login_required = (event) => {
    const signedIn = isAuthenticated(event);
    if (!signedIn) {
        // find location of current page
        const href = event.url.href;  // should probably be encoded..?

        // redirect to sign-in page with location as a query parameter 
        // (so we can redirect back after sign-in)
        //
        // HTTP 307 means "temporary redirect" and that the request method will not change
        // (e.g. POST will remain POST)
        throw redirect(307, `${LOGIN_URL}?next=${href}`);
    }
    return true;
};
