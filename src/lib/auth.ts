import { redirect, type RequestEvent } from '@sveltejs/kit';
import type { CookieSerializeOptions } from 'cookie';

const COOKIE_OPTS: CookieSerializeOptions = {
	httpOnly: true,
	path: '/'
};
export const login = (event: RequestEvent) => {
	event.cookies.set('signedIn', 'yes', COOKIE_OPTS);
};

export const logout = (event: RequestEvent) => {
	event.cookies.delete('signedIn', COOKIE_OPTS);
};

export const gateAuthenticated = (event: RequestEvent): boolean => {
	const signedIn = event.cookies.get('signedIn') === 'yes';
	if (!signedIn) {
		const location = event.url.pathname;
		throw redirect(307, `/sign-in?redirect=${location}`);
	}
	return true;
};
