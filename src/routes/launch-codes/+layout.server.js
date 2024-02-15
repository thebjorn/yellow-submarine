import { login_required } from '$lib/auth';

export const load = (event) => {
    const signedIn = login_required(event);
    return { signedIn };
};
