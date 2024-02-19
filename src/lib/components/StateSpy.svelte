<script>
    import { scale, slide, fade } from "svelte/transition";
    let {
        data,
        name = 'data',
        subkey = false,
        open = true,
        depth = 0,
        maxkey = 0,
        maxval = 0,
        maxdepth = 0,
    } = $props();
    // {JSON.stringify(data, null, 2)}




    // generic value to string
    const val2str = (val) => {
        return JSON.stringify(val);
    }

    // date to string
    const date2str = (val) => {
        return val.toLocaleString();
    }

    // array to string
    const arr2str = (val) => {
        return `[${val.map(v => type2str(v, val2type(v))).join(', ')}]`;
    }

    // object to string
    const obj2str = (val) => {
        maxdepth += 1
        return Object.fromEntries(Object.entries(val).map(([k, v]) => stringify(k, v)));
    }

    const type2str = (val, typename) => {
        switch (typename) {
            case 'boolean':
                return val2str(val);
            case 'number':
                return val2str(val);
            case 'string':
                return val2str(val);
            case 'Date':
                return date2str(val);
            case 'Array':
                return arr2str(val);
            case 'Object':
                return obj2str(val);
        }
    }

    const val2type = (val) => {
        if (typeof val === 'boolean' || typeof val === 'number' || typeof val === 'string') return typeof val;
        if (val instanceof Date) return 'Date';
        if (Array.isArray(val)) return 'Array';
        if (typeof val === 'object') return 'Object';
    }



    function stringify(k, v) {
        const typename = val2type(v);
        const strval = type2str(v, typename);
        maxkey = Math.max(maxkey, k.length);
        maxval = Math.max(maxval, strval?.length ?? 0);
        return [k, [strval, typename]]
    }

    // let strdata = $derived(Object.fromEntries(Object.entries(data).map(([k, v]) => [k, type2str(v)])));
    let strdata = $derived(Object.fromEntries(Object.entries(data).map(([k, v]) => stringify(k, v))));

    console.log('maxkey', maxkey);
    console.log('maxval', maxval);
    console.log('maxdepth', maxdepth);

/*
        
        {#each Object.keys(data) as key}
            {#if typeof data[key] === 'boolean' || typeof data[key] === 'number' || typeof data[key] === 'string'}
                <div class="item">
                    <span class="key">{key}</span>
                    <span class="value" class:string={typeof data[key] === 'string'}>{JSON.stringify(data[key])}</span>
                    <span class="type">{typeof data[key]}</span>
                </div>
            {:else if data[key] instanceof Date}
                <div class="item">
                    <span class="key">{key}</span>
                    <span class="value" class:string={typeof data[key] === 'string'}>
                        {data[key].toLocaleString()}
                        <!-- {JSON.stringify(data[key])} -->
                    </span>
                    <span class="type">Date</span>
                </div>
            {:else if Array.isArray(data[key])}
                <div class="item">
                    <span class="key">{key}</span>
                    <span class="value" class:string={typeof data[key] === 'string'}>
                        {data[key].toString()}
                    </span>
                    <span class="type">Array</span>
                </div>
            {:else if typeof data[key] === 'object'}
                <svelte:self data={data[key]} subkey name={key} depth={depth+1} />
            {:else}
                <div class="item">
                    <span class="key">{key}</span>
                    <span class="value">{JSON.stringify(data[key])}</span>
                    <span class="type">{typeof data[key]}</span>
                </div>
            {/if}
        {/each}

*/
</script>


<div class="state-spy" class:root={!subkey} class:subkey data-depth={depth} class:closed={!open}>
    {#if depth === 0}
        <button on:click={() => open = !open}>
              <svg class="close-icon"  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
              </svg>
        </button>
    {/if}

    {#if open }
    <div class="content" transition:slide>
        
        <h3>{name}</h3>
        {#each Object.keys(strdata) as key}
            {#if strdata[key][1] === 'Object'}
                <svelte:self 
                    data={data[key]} 
                    subkey 
                    name={key} 
                    depth={depth+1} 
                    maxkey={maxkey}
                    maxval={maxval}
                    maxdepth={maxdepth}
                    />
            {:else}
                <div class="item">
                    <span class="key" style="width:{3+maxkey-depth}rem">{key}</span>
                    <span class="value {strdata[key][1].toLowerCase()}"
                          style="{maxval}ex">
                        {strdata[key][0]}
                    </span>
                    <span class="type">{strdata[key][1]}</span>
                </div>
            {/if}
        {/each}



        
    </div>
    {/if}
    <!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->
</div>


<style lang="postcss">
    .state-spy {
        --indent: 1.5rem;
    }

    .root {
        background-color: #fefefe;
        transition: background-color 0.2s;
        padding: 1em;
        border-radius: 5px;
        border: 1px solid #999;
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 1000;
        max-height: 80vh;
        overflow: auto;
        max-width: 30vw;
    }

    .close-icon {
        --size: 22px;
        width: var(--size);
        height: var(--size);
        stroke: currentColor;
        transition: transform 0.3s;
    }
    .closed .close-icon {
        transform: rotate(45deg);
    }

    button {
        position: absolute;
        top: 3px;
        right: 11px;
        background-color: transparent;
        border: none;
        color: #222;
        font-size: 1.5em;
        line-height: 1;
        cursor: pointer;
        padding: 0;
        margin: 0;
        height: 1rem;
        width: 1rem;
    }
    .closed  {
        background-color: rebeccapurple;
        color: white;

        & button {
            position: inline;
            text-align: center;
            color: white;
        }
    }
    pre {margin-top: 2rem;}
    h3 {
        --size: 16px;
        font-size: 1em;
        margin-bottom: 0;
        text-indent: calc(-1 * var(--indent));
        font-weight: 600;
    }
    h3:before {
        content: '';
        border: 5px solid transparent;
        vertical-align: middle;
        border-left-color: #666;
        /* color: #666; */
        /* font-size: 14px; */
        /* margin-right: 0.5rem; */
        /* width: var(--size); */
        /* height: var(--size); */
        /* margin-left: var(--size); */
        /* margin-right: calc(-1 * var(--size)); */
        display: inline-block;
        /* float: left; */
    }
    [data-depth="0"] > .content > h3 {
        text-indent: 0;
    }

    .closed > .content > h3:before {
        content: '◢';
    }

    .item {
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        width: 100%;
        display: grid;
        /* grid-template-columns: auto 5rem 3.5rem; */
        grid-template-columns: auto 1fr 3.5rem;
        align-items: baseline;
        /* border-bottom: 1px solid #ddd; */
        padding-left: 24px;
        margin-left: -24px;
        border-left: 1px solid #ddd;

        /* >* {outline: 1px solid green;} */

        .key {
            font-weight: 500;
            /* width: var(--key-width, 11rem) */

        }
        .value {
            text-align: left;
            font-family: monospace;
            color: rgb(51, 51, 233);
        }
        .value.string, .value.array {
            hanging-punctuation: first last;
            /* padding-left: 1em; */
            text-indent: -10px each-line;
        }
        .type {
            text-align: right;
            color: #666;
            font-size: 0.8em;
            font-style: italic;
        }
    }
    .item:hover {
        background-color: #f0f0f0;
    }
    

    .item.object {
        /* border: 4px dashed red; */

        .key:before {
            content: '>';
        }

    }



    .state-spy {

    }
    .subkey {
        padding-left: var(--indent);
    }
</style>