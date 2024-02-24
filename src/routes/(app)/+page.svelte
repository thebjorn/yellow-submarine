<script>
    // import Button from "$lib/components/ui/button/button.svelte";
    import StateSpy from 'state-spy';
    // import LoginButton from "$lib/components/auth/login-button.svelte";

    let { 
        data 
    } = $props();
    data.foo = '422'
</script>

<svelte:head>
    <title>Submarine</title>
</svelte:head>

<h1>Welcome to the Submarine</h1>

<StateSpy data={data} />

<p style="margin:2rem;"> <a href="/secret-launch-codes">View Launch Codes</a></p>

<!-- <LoginButton mode="modal" asChild>
    <Button>Log In</Button>
</LoginButton> -->