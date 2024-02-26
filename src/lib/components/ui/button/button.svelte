<script>
    import { Button as ButtonPrimitive } from "bits-ui";
    import { buttonVariants } from ".";

    let {
        class: className,
		style: inlineStyles,
        variant = "default",
        size = "default",
        builders = [],
        ...restProps
    } = $props();

    console.log(
        "button:variants:",
        buttonVariants({
            variant: "default",
            size: "default",
            className,
        }),
    );

    // class={buttonVariants({ variant, size, className })}
</script>

<button
    class={className}
    style={inlineStyles}
    type="button"
    {...restProps}>
    <slot />
</button>

<style lang="scss">
	$foo: 45px;

	:global(.btn-primary) {
		background-color: var(--indigo-4);
		color: white;
		text-shadow: none;
		border-width: var(--border-size-1);

		&:hover {
			outline: 1px solid var(--indigo-5);
			outline-offset: 2px;
		}
	}

/*	
    :global(.btn) {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        border-radius: 0.375rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        font-weight: 500;
        white-space: nowrap;
        transition-property: color, background-color, border-color,
            text-decoration-color, fill, stroke;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 300ms;
    }

    :global(.btn-default) {
        background-color: var(--color-primary-500);
    }

    :global(.btn-destructive) {
    }
    :global(.btn-outline) {
    }
    :global(.btn-secondary) {
    }
    :global(.btn-ghost) {
    }
    :global(.btn-link) {
    }

    :global(.btn-size-default) {
    }
    :global(.btn-size-sm) {
    }
    :global(.btn-size-lg) {
    }
    :global(.btn-size-icon) {
    } 
*/

</style> 
