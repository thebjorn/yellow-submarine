import { redirect } from '@sveltejs/kit';
import { getLaunchCodeListResult } from '$lib/db';
import { login_required } from '$lib/auth';


export const load = async event => {
	// all pages that should be protected by login must call login_required
	// which will redirect to the login page if the user is not authenticated.
	// I.e., you must have a +page.server.js file for all protected routes.
	console.log('secret-launch-codes/+page.server.js:load:event:', event?.locals?.logged_in);
	// const signedIn = !!login_required(event);
	const session = await event.locals.getSession();
	if (!session?.user) return redirect(303, '/signin');
	return { 
		resultset: getLaunchCodeListResult(event.url.searchParams), 
	};
}