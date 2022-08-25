import { gateAuthenticated } from '$lib/auth';
import type { LayoutServerLoad } from '../../../.svelte-kit/types/src/routes/launch-codes/$types';
import type { LaunchCodeLayoutData } from './shared';

export const load: LayoutServerLoad = (event): LaunchCodeLayoutData => {
	const signedIn = gateAuthenticated(event);
	return { signedIn };
};
