<script>
    import { page } from "$app/stores";
    let { data } = $props();
    let signedIn = $derived(data.signedIn);
    
    $effect(() => console.log('signedIn', signedIn));
</script>

<header>
    <nav>
        <a href="/">home</a>
        <span>Signed In: {JSON.stringify(signedIn)}</span>
        <a href="/logout?next=qq">logout</a>
    </nav>
</header>

<slot/>

<style>

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