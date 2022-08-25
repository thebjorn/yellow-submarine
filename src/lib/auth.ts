import { redirect, type RequestEvent } from '@sveltejs/kit';
import { type CookieSerializeOptions, serialize, parse } from 'cookie';

const COOKIE_OPTS: CookieSerializeOptions = {
	httpOnly: true
};
export const login = (event: RequestEvent) => {
	const { setHeaders } = event;
	const cookie = serialize('signedIn', 'yes', COOKIE_OPTS);
	setHeaders({
		'set-cookie': cookie
	});
};

export const logout = (event: RequestEvent) => {
	const { setHeaders } = event;
	const cookie = serialize('signedIn', '', { ...COOKIE_OPTS, maxAge: 0 });
	setHeaders({
		'set-cookie': cookie
	});
};

export const gateAuthenticated = (event: RequestEvent): boolean => {
  const cookies = parse(event.request.headers.get('cookie') || '');
  const signedIn = cookies['signedIn'] && cookies['signedIn'] === 'yes';
  if (! signedIn) {
    throw redirect(307, '/sign-in')
  }
  return true
}
