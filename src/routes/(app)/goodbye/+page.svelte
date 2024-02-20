<script>
    import StateSpy from "../../../lib/components/StateSpy.svelte";

    let { 
        data 
    } = $props();
</script>

<StateSpy data={data} />

<h1>Goodbye for now...</h1>
