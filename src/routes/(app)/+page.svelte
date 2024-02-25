<script>
    import { SignIn, SignOut } from "@auth/sveltekit/components"
    // import {Logout, Login} from "$lib/components/auth/index.js";
    import Logout from "$lib/components/auth/Logout.svelte";
    import Login from "$lib/components/auth/Login.svelte";
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

<StateSpy {data} />

<p style="margin:2rem;">
    <a href="/secret-launch-codes">View Launch Codes</a>
</p>


<div class="centered">
    {#if data.session}
        {#if data.session.user?.image}
            <span
                style="background-image: url('{data.session.user.image}')"
                class="avatar"
            ></span>
        {/if}
        <span class="signedInText">
            <small>Signed in as</small><br />
            <strong>{data.session.user?.name ?? "User"}</strong>
        </span>
        <Logout class="logout" logout-redirect-url="/goodbye">
            Logg ut
        </Logout>
    {:else}
        <span class="notSignedInText">You are not signed in</span>
        <!-- <SignIn provider="github"/> -->
        <Login provider="github"/>
        <Login provider="google"/>
        <Login provider="facebook"/>
    {/if}
</div>

<style>
    :global(.logout) {
        padding: 0.5rem 1rem;
    }

    .centered {
        border: 1px solid #000;
        padding: 1rem;
        margin: 1rem auto;
        width: fit-content;
        /* display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 1rem; */
    }

    .logout {
        background-color: red !important;
    }

    .avatar {
        width: 2rem;
        height: 2rem;
        border-radius: 50%;
        display: inline-block;
        background-size: cover;
        background-position: center;
        margin-right: 0.5rem;
    }

    .signedInText {
        display: inline-block;
        vertical-align: top;
        margin-right: 1rem;
    }

    .notSignedInText {
        display: inline-block;
        vertical-align: top;
        margin-right: 1rem;
    }
</style>
