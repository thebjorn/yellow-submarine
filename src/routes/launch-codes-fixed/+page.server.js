import { getLaunchCodeListResult } from '$lib/db';
import { gateAuthenticated } from '$lib/auth';

export const load = (event) => {
	const signedIn = gateAuthenticated(event);
	return { list: getLaunchCodeListResult(event.url.searchParams), signedIn };
};


