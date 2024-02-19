import { get_sessionid } from '$lib/auth.js';

// Svelte error handler
function handleError({error, event, status, message, stack, context, errorInfo, component}) {
    // Handle the error here
    // console.log('vvvvvvv handleError vvvvvvv')
    console.log("ERROR:       ", status, message)
    console.log('URL:         ', event?.url?.href);
    // show the http referer
    console.log("HTTP-REFERER:", event.request.headers.get('referer'));
    console.log("CLIENT:      ", event.getClientAddress());
    console.log("LOCALS:      ", event.locals);
    console.log();
    console.error(error)
    // console.log('^^^^^^^ handleError ^^^^^^^')
    return {
        message: message,
        errorId: "42",
    };
}

async function handle({event, resolve}) {
    console.log('await resolve(event)')
    const sessionid = get_sessionid(event)
    event.locals.logged_in = !!sessionid;
    event.locals.sessionid_value = sessionid ?? null;
    event.locals.ran_hooks_server_js = true;

    const response = await resolve(event);
    
    console.log('after await resolve(event)\n')
    return response;
}

export { handleError, handle };
