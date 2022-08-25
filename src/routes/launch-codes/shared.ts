import type { LaunchCodeListResult } from '$lib/db';

export type LaunchCodePageData = {
	list: LaunchCodeListResult;
};

export type LaunchCodeLayoutData = {
	signedIn: boolean;
};
