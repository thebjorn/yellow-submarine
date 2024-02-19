// all of these run on the server...
import { redirect } from '@sveltejs/kit';

export const LOGOUT_REDIRECT_URL = '/goodbye';
export const LOGIN_REDIRECT_URL = '/secret-launch-codes';
export const LOGIN_URL = '/login';
export const LOGOUT_URL = '/logout';

export const COOKIE_NAME = 'signedIn';

const COOKIE_OPTS = {
    httpOnly: true,
    path: '/'
};

export const isAuthenticated = event => {
    return event.cookies?.get(COOKIE_NAME) === 'yes';
}

export const get_sessionid = event => {
    return event.cookies?.get(COOKIE_NAME);
}


export const login = async event => {
    if (isAuthenticated(event)) return;

    event.cookies.set(COOKIE_NAME, 'yes', COOKIE_OPTS);

    // find the redirect value from the form data
    const fd = await event.request.formData();
    const location = (fd.get('next') || LOGIN_REDIRECT_URL).toString()

    // update session data in the database
    console.log("Create session on server/db (should print in terminal)...")

    // notify the presence channel to say hello
    // ...

    // redirect to the location
    //
    // HTTP 303 means "see other" and that 
    // the request method will change to GET
    redirect(303, location);
}


export const logout = async event => {
    // runs on the server
    if (!isAuthenticated(event)) return;

    // const cookie_value = event.cookies.get(COOKIE_NAME);
    
    // remove the cookie
    event.cookies.delete(COOKIE_NAME, COOKIE_OPTS);

    const form = await event.request.formData();
    const next = form.get('next') ?? LOGOUT_REDIRECT_URL;

    console.log("Invalidate session on server/db (should print in terminal)...")

    redirect(303, next)
}


export const login_required = (event) => {
    // runs on the server
    console.log("LOGIN_REQUIRED:", event.request.method, event.locals)
    if (isAuthenticated(event)) return {};

    // find location of current page
    const href = event.url.href;  // should probably be encoded..?

    // redirect to sign-in page with location as a query parameter 
    // (so we can redirect back after sign-in)
    //
    // HTTP 307 means "temporary redirect" and that the request method will not change
    // (e.g. POST will remain POST)
    redirect(307, `${LOGIN_URL}?next=${href}`);
};
