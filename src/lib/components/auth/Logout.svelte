<script>
    import {LOGOUT_REDIRECT_URL} from '$lib/auth'
    import { enhance } from "$app/forms"
  
    let {
        class: className,
        redirect,              
        logout_redirect_url,      // redirect to this url after logout
        signOutPage = "signout",
        ...others
    } = $props()

    if (others['logout-redirect-url']) {
        logout_redirect_url = others['logout-redirect-url']
    }

    logout_redirect_url = logout_redirect_url || logout_redirect_url;
</script>


<form
    method="POST"
    action={`/${signOutPage}`}
    use:enhance
    class={`signOutButton`}
    {...others}
>
    {#if redirect || logout_redirect_url}
        {#if redirect}
            <input type="hidden" name="redirect" value={redirect} />
        {/if}
        {#if logout_redirect_url}
            <input type="hidden" name="redirectTo" value={logout_redirect_url} />
        {/if}
    {/if}
    <button class={`LogOutButton ${className ?? ""}`} type="submit">
        <slot>logout</slot>
    </button>
</form>
