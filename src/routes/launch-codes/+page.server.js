import { getLaunchCodeListResult } from '$lib/db';
export const load = (event) => {
    return { list: getLaunchCodeListResult(event.url.searchParams) };
};


