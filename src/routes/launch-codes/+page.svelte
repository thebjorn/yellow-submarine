<script>
    import { page } from "$app/stores";
    let { data } = $props();
    let resultset = $derived(data.resultset);
    let signedIn = $derived(data.signedIn);
    

    const update_pages = resultset => {
        const pages = [];
        for (let p = 1; p <= resultset.numPages; p++) {
            const href =
                p === 1
                    ? $page.url.pathname
                    : $page.url.pathname + `?page=${p}`;
            pages.push({
                href,
                label: `Page ${p}`,
                selected: p === resultset.page,
            });
        }
        return pages;
    };
    let pages = $derived(update_pages(resultset));
</script>

<h1>
    Launch Codes
    <!-- getting signedIn from page -->
    <small>(signedin: {signedIn})</small>
</h1>
<p>
    Page {resultset.page} of {resultset.numPages}. |
    {#each pages as p, i (p.href)}
        <a href={p.href} class:selected={p.selected}>{p.label}</a>
        {" | "}
    {/each}
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
