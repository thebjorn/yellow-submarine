<script>
    let { data } = $props();
</script>

<svelte:head>
    <title>Dashboard</title>
</svelte:head>

<h1>Dashboard</h1>

<pre>{JSON.stringify(data, null, 2)} </pre>