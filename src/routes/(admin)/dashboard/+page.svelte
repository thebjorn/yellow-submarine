<script>
    import StateSpy from "../../../lib/components/StateSpy.svelte";

    let { data } = $props();
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<StateSpy data={data} />
<h1>Dashboard</h1>

<pre>{JSON.stringify(data, null, 2)} </pre>