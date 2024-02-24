<script>
    import { LOGIN_URL, LOGOUT_URL, LOGIN_REDIRECT_URL, LOGOUT_REDIRECT_URL } from '$lib/auth.js';
    let { data } = $props();
    let user = data?.user;
    // let signedIn = user?.signedIn;
</script>



<header>
    <nav>
        <a href="/">home</a>

        <a href="/dashboard">dashboard</a>
        <a href="/dashboard/dashboard-subpage">dashboard / subpage</a>
        <!-- <span>
            Signed In: {user?.name} ({JSON.stringify(signedIn)})
        </span>

        <a disabled={signedIn} href="{LOGIN_URL}?next={LOGIN_REDIRECT_URL}">login</a>
        
        <form method="post" action="{LOGOUT_URL}">
            <input name="next" value={LOGOUT_REDIRECT_URL} type="hidden">
            <button type="submit" disabled={!signedIn}>logout</button>
        </form> -->
    </nav>
</header>


<slot />


<style>
    :global(html, body) {
        background-color: black;
        color: white;
        min-height: 100%;
        height: 100%;
    }

    [disabled] {
        pointer-events: none;
        color: #999;
    }

    a {
        color: white;
    }   

    header>nav {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    header>nav>* {
        border: 1px solid #a7a4a4;
        padding: 0.5rem 1rem;
    }

    button {
        background-color: black;
        color: white !important;
        text-decoration: underline !important;
        border: none;
        padding: 0;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
        margin: 4px 2px;
        cursor: pointer;
    }
</style>