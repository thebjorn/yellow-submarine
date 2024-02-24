export const LOGOUT_REDIRECT_URL = '/goodbye';
export const LOGIN_REDIRECT_URL = '/secret-launch-codes';
export const LOGIN_URL = '/login';
export const LOGOUT_URL = '/logout';







import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from "$env/static/private"

export const { handle, signIn, signOut } = SvelteKitAuth({
    debug: true,
    providers: [
        GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET })
    ],
})

