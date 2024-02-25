<script>
    // import StateSpy from 'state-spy';

    let { 
        data,
        children
    } = $props();

</script>

<header>
    <nav>
        <a href="/">home</a>
        <a href="/dashboard">dashboard</a>
        <a href="/dashboard/dashboard-subpage">dashboard / subpage</a>
    </nav>
</header>

{@render children()}



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
