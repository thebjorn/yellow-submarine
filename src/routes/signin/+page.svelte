<script>
    import { page } from "$app/stores";
    import { LOGIN_REDIRECT_URL } from '$lib/auth';
    import StateSpy from 'state-spy'

    let {data} = $props();
    const next = $page.url.searchParams.get("next") || LOGIN_REDIRECT_URL;
</script>

<h1>Sign In</h1>

<StateSpy data={data} />

<form method="post">
    <input name="next" value={next} type="hidden">
    <button type="submit">Click Here to Sign In</button>
</form>
