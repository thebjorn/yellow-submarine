import { getLaunchCodeListResult } from '$lib/db';

export const load = (event) => {
    return { 
        resultset: getLaunchCodeListResult(event.url.searchParams) 
    };
};


