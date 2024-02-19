<script>
    import StateSpy from "$lib/components/StateSpy.svelte";

    let { 
        data 
    } = $props();

    let q = {
        // a dict nested 4 levels deep
        aa: 42,
        aaa: new Date(),
        xa: "hello",
        a: {
            bb: 3.1415963,
            b: {
                cc: ['hello', 42, 'world', 'sveltekit', 'rocks!'],
                ccc: ['hello', 42, 'world', 'sveltekit', 'rocks!'],
                c: {
                    d: "hello"
                }
            }
        }
    }
</script>

<svelte:head>
    <title>Submarine</title>
</svelte:head>

<h1>Welcome to the Submarine</h1>

<pre>{JSON.stringify(data, null, 2)}</pre>

<pre>{JSON.stringify(q, null, 2)}</pre>

<!-- <StateSpy data={data} /> -->
<!-- <StateSpy data={q} /> -->
<StateSpy data={[q, data]} />

<p> <a href="/secret-launch-codes">View Launch Codes</a></p>

