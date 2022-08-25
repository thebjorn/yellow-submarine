<script lang="ts">
	import { page } from '$app/stores';
	import type { PageData } from './$types';
	export let data: PageData;
	$: list = data.list;
  $: signedIn = data.signedIn;
	let pages: { label: string; href: string }[] = [];
	$: {
		pages = [];
		for (let p = 1; p <= list.numPages; p++) {
			const href = p === 1 ? $page.url.pathname : $page.url.pathname + `?page=${p}`;
			pages.push({
				href,
				label: `Page ${p}`
			});
		}
	}
</script>

<h1>Launch Codes</h1>
<p>
	Page {list.page} of {list.numPages}.
  |
	{#each pages as p, i (p.href)}
		<a href={p.href}>{p.label}</a>
		{' | '}
	{/each}

	Signed In: {JSON.stringify(signedIn)}
</p>

<table style="width: 100%;">
	<thead>
		<tr>
			<th style="text-align: left; width: 15%">ID</th>
			<th style="text-align: left;">Launch Code</th>
		</tr>
	</thead>
	<tbody>
		{#each list.records as rec (rec.id)}
			<tr>
				<td>
					{rec.id}
				</td>
				<td>
					{rec.code}
				</td>
			</tr>
		{/each}
	</tbody>
</table>
