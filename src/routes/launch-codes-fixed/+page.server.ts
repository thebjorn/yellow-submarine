import type { LaunchCodeFixedPageData } from './shared';
import type { PageServerLoad } from './$types';
import { getLaunchCodeListResult } from '$lib/db';
import { gateAuthenticated } from '$lib/auth';
export const load: PageServerLoad = (event): LaunchCodeFixedPageData => {
	const signedIn = gateAuthenticated(event);
	return { list: getLaunchCodeListResult(event.url.searchParams), signedIn };
};


