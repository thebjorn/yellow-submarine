# authentication in svelte(kit)

Coming from a Django background, these are my doodles with sveltekit and authentication.

The original code comes from a project linked from: https://github.com/sveltejs/kit/issues/6315

I converted to .js and changed tabs to spaces (like Guido has proclaimed to be the right way to do it). Generelly, I've removed everything that was not absolutely necessary for the authentication part).

Svelte/SvelteKit does not have a very well-developed story when it comes to auth/auth, so much of it is left to the developer to implement and make sure all steps are correct, secure, and don't leak PII.

## Structure of the code

The code is structured as follows:

```console
src\routes
|   (app)                           # layout group 
|   |-- +layout.server.js           # login status code
|   |-- +layout.svelte              # app shell
|   |-- +page.svelte                # home page
    |-- goodbye                     # redirect after logout page
    |   `-- +page.svelte            
|   `-- launch-codes-fixed          # protected page
|       |-- +page.server.js
|       `-- +page.svelte
`-- (login)
    |-- login
    |   |-- +page.server.js
    |   `-- +page.svelte
    `-- logout
        |-- +page.server.js
        `-- +page.svelte
```

### references
**Layout group**: https://kit.svelte.dev/docs/advanced-routing#advanced-layouts


# Notes...

Most things are unproblematic when the user takes the happy path, i.e. clicks on login/logout etc. in the current window. However, if the user logs out in a different window (can be simulated by removing the cookie in devtools), then the caching of layout code is problematic..

## You need to have separate layout groups..

`+layout.server.js` files are meant for caching, not for authentication. In particular this means that data you've put into the layout will stay around after the user logs out.

NOTE: this also applies to data in `event.locals` - it will contain stale data if the user logs out in a different window.

If you want login information to be displayed in the "app shell", e.g. the user's name, then you need to have separate layout groups for the login and the app shell.

Otherwise the user information will still be displayed (on the login page) if the user logs out in a different window (or removes the cookie in devtools).

In particular, this means that you'll need to move your "home" page down one level:

```console
src\routes
|   (app)
|   |-- +page.svelte       (new home of home page)
`-- (login)
```

this makes it possible to have a clean layout for the login pages.

## Auth code.

All auth code is in `src/lib/auth.js`. It currently only demonstrates the correct way to set, remove, and check for session cookies.

Each route that needs to be protected must have a `load` function that checks if the user is logged in:
    
```javascript
export const load = event => {
    login_required(event);
    ...rest of load code...
}
```

If there is no other load code it can be shortened to:

```javascript
export const load = login_required;
```

## event.locals

You only need to set the login information once in the root `+layout.server.js` file. This is because the `event.locals` object is passed down to all child routes.

This caching is safe as long as you don't display any of it in the UI without first doing a `login_required` 
call in the `load` function of the route. Every route. No exceptions.