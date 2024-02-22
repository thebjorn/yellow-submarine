<script>
    import Button from "$lib/components/ui/button/button.svelte";
    import StateSpy from "$lib/components/StateSpy.svelte";
    import LoginButton from "$lib/components/auth/login-button.svelte";

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

<LoginButton mode="modal" asChild>
    <Button>Log In</Button>
</LoginButton>