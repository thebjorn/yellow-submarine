<script>
    import { page } from "$app/stores";
    import { 
        LOGIN_URL, LOGOUT_URL,
        LOGIN_REDIRECT_URL, LOGOUT_REDIRECT_URL 
    } from '$lib/auth';
    import StateSpy from "$lib/components/StateSpy.svelte";

    let { 
        data 
    } = $props();

    // console.log('/+layout.svelte data', data);
    // console.log('signedin', data.signedIn, typeof data.signedIn);
    let signedIn = $derived(data.signedIn);
    let user = $derived(data.user);

    // console.log('$page.url', $page.url);
    // console.log('$page.url.pathname', $page?.url?.pathname);
    // console.log('$page.route.id', $page.route?.id);
    // console.log('\n');
    // console.log('LOGIN_REDIRECT_URL', LOGIN_REDIRECT_URL);
    
    $effect(() => console.log('signedIn', signedIn));
</script>




<header>
    <nav>
        <a href="/">home</a>

        <a href="/dashboard">dashboard</a>
        <a href="/dashboard/dashboard-subpage">dashboard / subpage</a>
        <span>
            Signed In: {user?.name} ({JSON.stringify(signedIn)})
        </span>

        <a disabled={signedIn} href="{LOGIN_URL}?next={LOGIN_REDIRECT_URL}">login</a>
        
        <form method="post" action="{LOGOUT_URL}">
            <input name="next" value={LOGOUT_REDIRECT_URL} type="hidden">
            <button type="submit" disabled={!signedIn}>logout</button>
        </form>
    </nav>
</header>

<slot/>

<style>
    :global(html, body) {
        background-color: white;
        color: #000;
        min-height: 100%;
        height: 100%;
    }

    [disabled] {
        pointer-events: none;
        color: #999;
    }

    header>nav {
        display: flex;
        gap: 1rem;
        margin-bottom: 2rem;
    }

    header>nav>* {
        border: 1px solid #000;
        padding: 0.5rem 1rem;
    }
</style>