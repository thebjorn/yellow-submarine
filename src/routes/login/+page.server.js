import { redirect } from '@sveltejs/kit';
import { login } from '$lib/auth'
import { LOGIN_REDIRECT_URL } from '../../lib/auth.js';


const loginAction = async (event) => {
    // set session cookie
    login(event);

    // find the redirect value from the form data
    const fd = await event.request.formData();
    const location = (fd.get('next') || LOGIN_REDIRECT_URL).toString()

    // redirect to the location
    //
    // HTTP 303 means "see other" and that 
    // the request method will change to GET
    throw redirect(303, location);
}

export const actions = {
    default: loginAction
}