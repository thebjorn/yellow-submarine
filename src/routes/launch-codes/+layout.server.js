import { gateAuthenticated } from '$lib/auth';

export const load = (event) => {
    const signedIn = gateAuthenticated(event);
    return { signedIn };
};
