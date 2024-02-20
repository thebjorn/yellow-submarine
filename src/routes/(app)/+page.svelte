<script>
    import StateSpy from "$lib/components/StateSpy.svelte";

    let { 
        data 
    } = $props();
</script>

<svelte:head>
    <title>Submarine</title>
</svelte:head>

<h1>Welcome to the Submarine</h1>

<StateSpy data={data} />

<p> <a href="/secret-launch-codes">View Launch Codes</a></p>

