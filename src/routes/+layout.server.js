import { isAuthenticated } from '$lib/auth.js';

export const load = (event) => {
    console.log('/+layout.server.js:load:event:', event.request.method)
    const signedIn = isAuthenticated(event);
    return { signedIn };
};
