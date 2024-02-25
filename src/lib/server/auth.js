import { SvelteKitAuth } from "@auth/sveltekit"
import GitHub from "@auth/sveltekit/providers/github"
import Facebook from "@auth/sveltekit/providers/facebook"
import { 
    GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET,
    FACEBOOK_CLIENT_ID, FACEBOOK_CLIENT_SECRET,
} from "$env/static/private"
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "./dbinit"

export const LOGOUT_REDIRECT_URL = '/goodbye';
export const LOGIN_REDIRECT_URL = '/secret-launch-codes';
export const LOGIN_URL = '/login';
export const LOGOUT_URL = '/logout';



export const { handle, signIn, signOut } = SvelteKitAuth({
    debug: true,
    adapter: MongoDBAdapter(clientPromise, {
        Accounts: 'accounts',
        Sessions: 'sessions',
        Users: 'users',
        VerificationTokens: 'verfification_tokens',
    }),
    providers: [
        GitHub({ clientId: GITHUB_CLIENT_ID, clientSecret: GITHUB_CLIENT_SECRET }),
        // LinkedIn({ clientId: LINKEDIN_CLIENT_ID, clientSecret: LINKEDIN_CLIENT_SECRET }),
        Facebook({ clientId: FACEBOOK_CLIENT_ID, clientSecret: FACEBOOK_CLIENT_SECRET }),
    ],
})

