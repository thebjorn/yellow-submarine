import { redirect } from '@sveltejs/kit';
import { login } from '$lib/auth'
import { LOGIN_REDIRECT_URL } from '../../lib/auth.js';


export const actions = {
    default: async (event) => {
        // set session cookie
        login(event);
    
        // find the redirect value from the form data
        const fd = await event.request.formData();
        const location = (fd.get('next') || LOGIN_REDIRECT_URL).toString()
    
        // update session data in the database
        // ...
    
        // notify the presence channel to say hello
        // ...
    
        // redirect to the location
        //
        // HTTP 303 means "see other" and that 
        // the request method will change to GET
        redirect(303, location);
    }
}