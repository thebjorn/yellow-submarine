<script>
	import { page } from '$app/stores';
	
	let {
		data
	} = $props();
	
	let resultset = $derived(data.resultset);
	let signedIn = $derived(data.signedIn);

	let pages = $derived.by(() => {
		const pages = [];
		for (let p = 1; p <= resultset.numPages; p++) {
			const href = p === 1 ? $page.url.pathname : $page.url.pathname + `?page=${p}`;
			pages.push({
				href,
				label: `Page ${p}`,
				selected: p === resultset.page
			});
		}
		return pages
	});
</script>

<h1>Launch Codes (Fixed)</h1>
<p>
	Page {resultset.page} of {resultset.numPages}.

	{#each pages as p, i (p.href)}
		<a href={p.href} class:selected={p.selected} style="margin-inline:1rem;">{p.label}</a>
		|
	{/each}

	Signed In: {JSON.stringify(signedIn)} <!-- in page.svelte -->
</p>

<table style="width: 100%;">
	<thead>
		<tr>
			<th style="text-align: left; width: 15%">ID</th>
			<th style="text-align: left;">Launch Code</th>
		</tr>
	</thead>
	<tbody>
		{#each resultset.records as rec (rec.id)}
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


<style>
	.selected {
		font-weight: bold;
	}
    table {
        margin-top: 1rem;
        border-collapse: collapse;
        width: 100%;
    }
    th,
    td {
        border: 1px solid #000;
        padding: 0.5rem 1rem;
    }
    th {
        text-align: left;
    }
    tr:nth-child(even) {
        background-color: #f2f2f2;
    }
    tr:hover {
        background-color: #ddd;
    }
    th {
        background-color: #4caf50;
        color: white;
    }
    .selected {
        font-weight: bold;
    }
</style>
