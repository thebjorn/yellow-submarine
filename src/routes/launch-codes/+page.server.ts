import type { LaunchCodePageData } from './shared';
import type { PageServerLoad } from './$types';
import { getLaunchCodeListResult } from '$lib/db';
export const load: PageServerLoad = (event): LaunchCodePageData => {
	return { list: getLaunchCodeListResult(event.url.searchParams) };
};


