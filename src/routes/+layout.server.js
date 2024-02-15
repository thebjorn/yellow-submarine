import { isAuthenticated } from '$lib/auth.js';

export const load = (event) => {
    const signedIn = isAuthenticated(event);
    return { signedIn };
};
