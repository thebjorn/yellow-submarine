import { isAuthenticated } from '$lib/auth.js';

export const load = (event) => {
    // console.log('/+layout.server.js:load:event:', event.request.method)
    
    // let the root layout know if the user is signed in (needed for displaying
    // login/logout links in the header)
    const signedIn = isAuthenticated(event);
    return { signedIn };
};
