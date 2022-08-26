<script lang="ts">
import { page } from "$app/stores";


  const redirect = $page.url.searchParams.get('redirect') || ''
</script>
<form method="post">
  <input name="redirect" value={redirect} type="hidden"/>
  <button type="submit">Click Here to Sign In</button>
</form>