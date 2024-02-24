<script>
    import StateSpy from 'state-spy'

    let { data } = $props();
</script>

<svelte:head>
    <title>Dashboard subpage</title>
</svelte:head>

<StateSpy data={data} />
<h1>Dashboard subpage</h1>

<pre>{JSON.stringify(data, null, 2)} </pre>