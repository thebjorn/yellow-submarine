import { getLaunchCodeListResult } from '$lib/db';
import { login_required } from '$lib/auth';


export const load = event => {
	// all pages that should be protected by login must call login_required
	// which will redirect to the login page if the user is not authenticated.
	// I.e., you must have a +page.server.js file for all protected routes.
	console.log('secret-launch-codes/+page.server.js:load:event:', event?.locals?.logged_in);
	const signedIn = !!login_required(event);
	return { 
		resultset: getLaunchCodeListResult(event.url.searchParams), 
	};
}