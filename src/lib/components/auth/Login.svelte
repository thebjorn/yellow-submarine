<script>
    import { enhance } from "$app/forms"

    let {
        class: className,
        provider = [0],
        signInPage = 'signin',
        options,
        authorizationParams,
        ...rest
    } = $props();

    const callbackUrl =
      options 
        ? options.get("redirectTo")
        : options?.redirectTo
    const redirect =
      options ? options.get("redirect") : options?.redirectTo
  
    const authorizationParamsInputs = authorizationParams
      ? typeof authorizationParams === "string" && authorizationParams
        ? new URLSearchParams(authorizationParams)
        : authorizationParams
      : undefined
</script>

<form
    method="POST"
    action={`/${signInPage}`}
    use:enhance
    class={`signInButton ${className}`}
    {...rest}
>
    <input type="hidden" name="providerId" value={provider} />
    {#if callbackUrl}
        <input type="hidden" name="callbackUrl" value={callbackUrl} />
    {/if}
    {#if redirect}
        <input type="hidden" name="redirect" value={redirect} />
    {/if}
    {#if authorizationParamsInputs}
        {#each Object.entries(authorizationParamsInputs) as [key, value]}
            <input type="hidden" name={`authorizationParams-${key}`} {value} />
        {/each}
    {/if}
    {#if provider === "credentials"}
        <slot name="credentials" />
    {/if}
    {#if provider === "email" || provider === "sendgrid" || provider === "resend"}
        <slot name="email">
            <label
                class="section-header"
                for={`input-email-for-${provider}-provider`}
            >
                Email
            </label>
            <input
                id="input-email-for-email-provider"
                type="email"
                name="email"
                placeholder="email@example.com"
                required
            />
        </slot>
    {/if}
    <button style="width: 100%" type="submit">
        <div class="provider-icon-box">
            <slot name="providerIcon">
                {#if provider === 'github'}
                    <svg class="provider-icon github" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12 2c-2.4 0-4.7.9-6.5 2.4a10.5 10.5 0 0 0-2 13.1A10 10 0 0 0 8.7 22c.5 0 .7-.2.7-.5v-2c-2.8.7-3.4-1.1-3.4-1.1-.1-.6-.5-1.2-1-1.5-1-.7 0-.7 0-.7a2 2 0 0 1 1.5 1.1 2.2 2.2 0 0 0 1.3 1 2 2 0 0 0 1.6-.1c0-.6.3-1 .7-1.4-2.2-.3-4.6-1.2-4.6-5 0-1.1.4-2 1-2.8a4 4 0 0 1 .2-2.7s.8-.3 2.7 1c1.6-.5 3.4-.5 5 0 2-1.3 2.8-1 2.8-1 .3.8.4 1.8 0 2.7a4 4 0 0 1 1 2.7c0 4-2.3 4.8-4.5 5a2.5 2.5 0 0 1 .7 2v2.8c0 .3.2.6.7.5a10 10 0 0 0 5.4-4.4 10.5 10.5 0 0 0-2.1-13.2A9.8 9.8 0 0 0 12 2Z" clip-rule="evenodd"/>
                    </svg>
                {:else if provider === 'facebook'}
                    <svg class="provider-icon facebook" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M13.1 6H15V3h-1.9A4.1 4.1 0 0 0 9 7.1V9H7v3h2v10h3V12h2l.6-3H12V6.6a.6.6 0 0 1 .6-.6h.5Z" clip-rule="evenodd"/>
                    </svg>
                {:else if provider === 'linkedin'}  

                {:else if provider === 'google'}
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24" width="24">
                        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M1 1h22v22H1z" fill="none"/>
                    </svg>
                {/if}
            </slot>
        </div>
        <div class="button-text">
            <slot name="submitButton">Logg inn med {provider}</slot>
        </div>
    </button>
</form>

<style>
    form {
        width: 248px;
        margin-block: 4px;
    }
    button {
        height: 50px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-weight: 600;
        font-size: 15px;
        
        display: grid;
        grid-template-columns: 30px 1fr;
        gap: 10px;
        align-items: center;
        justify-content: start;

        background-color: white;
        border: 1px solid #111;
        border-radius: 5px;
        padding-inline: 15px;
    }

    .button-text {
        text-align: left;
    }

    .provider-icon-box {
        /* outline: 1px solid rebeccapurple; */
        /* padding: 4px; */
        /* display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        margin: 15px; */
    }

    .provider-icon {
        width: 30px;
        height: 30px;
    }

    .provider-icon.facebook {
        color: #0866FF;
    }
</style>