import { isAuthenticated } from '$lib/auth.js';

export const load = async (event) => {
    // console.log('/+layout.server.js:load:event:', event.request.method)

    // let the root layout know if the user is signed in (needed for displaying
    // login/logout links in the header)
    // const signedIn = isAuthenticated(event);
    let user = null;

    // if (signedIn) {
    //     console.log("Fetch user data from db (should print in terminal)...")
    //     // user = { name: 'John Doe' };
    // }
    
    return { 
        // signedIn,
        foo: "bar",
        // locals: event.locals
        session: await event.locals.getSession()
    };
};
