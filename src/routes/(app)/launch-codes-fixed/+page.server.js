import { getLaunchCodeListResult } from '$lib/db';
import { login_required } from '$lib/auth';


function login_req_decorator(fn) {
	return function(event) {
		login_required(event);
		return fn(event);
	}
}

// export const load = login_req_decorator(event => {
// 	// all pages that should be protected by login must call login_required
// 	// which will redirect to the login page if the user is not authenticated.
// 	// I.e., you must have a +page.server.js file for all protected routes.
// 	return { 
// 		resultset: getLaunchCodeListResult(event.url.searchParams), 
// 	};
// })

export const load = event => {
	// all pages that should be protected by login must call login_required
	// which will redirect to the login page if the user is not authenticated.
	// I.e., you must have a +page.server.js file for all protected routes.
	const signedIn = login_required(event);
	return { 
		resultset: getLaunchCodeListResult(event.url.searchParams), 
		signedIn 
	};
}