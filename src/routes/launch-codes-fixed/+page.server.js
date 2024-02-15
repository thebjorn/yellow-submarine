import { getLaunchCodeListResult } from '$lib/db';
import { login_required } from '$lib/auth';

export const load = (event) => {
	const signedIn = login_required(event);
	return { list: getLaunchCodeListResult(event.url.searchParams), signedIn };
};


