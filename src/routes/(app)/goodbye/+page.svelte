<script>
    import StateSpy from "state-spy";

    let { data } = $props();
</script>

<svelte:body class="pico" />


<main>
    <StateSpy position="bottom-right" {data} />

    <h1>Goodbye for now...</h1>
</main>

