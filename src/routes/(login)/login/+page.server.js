import { login } from '$lib/auth'

export const actions = { default: login }


export const load = (event) => {
    // console.log('/+page.server.js:load:event:', event.request.method)

    return { 
        locals: event.locals
    };
}
