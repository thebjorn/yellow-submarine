<script>
    let {
        mode = 'redirect',    // 'modal' or 'redirect'
        asChild,
        children
    } = $props();

    const onclick = () => console.log("LOGIN BUTTON CLICKED!")

    const onkeyup = (e) => {
        if (e.key === "Enter") {
            console.log("LOGIN BUTTON ENTER PRESSED!")
        }
    }
</script>


<span onclick={onclick} onkeyup={onkeyup} role="button" tabindex="0">
    {@render children()}
</span>


<style>
    span {
        cursor: pointer;
    }
</style>