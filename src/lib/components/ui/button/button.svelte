<script>
    import { Button as ButtonPrimitive } from "bits-ui";
    import { buttonVariants } from ".";

    let {
        class: className,
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

<ButtonPrimitive.Root
    class="btn btn-default btn-size-default"
    {builders}
    type="button"
    {...restProps}
>
    <slot />
</ButtonPrimitive.Root>

<style lang="scss">
	$foo: 45px;
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
