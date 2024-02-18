import { redirect } from '@sveltejs/kit';
import { logout } from '$lib/auth.js';
import { LOGOUT_REDIRECT_URL } from '$lib/auth.js';


export const actions = {
    default: async (event) => {
        console.log('/logout/+page.server.js:default-action:', event.request.method)
        logout(event);
        const form = await event.request.formData();
        const next = form.get('next') ?? LOGOUT_REDIRECT_URL;

        console.log('LOGOUT:next:', next);
        redirect(303, next)
    }
}