<script lang="ts">
    let hovering = false;

    function enableHover() {
        hovering = true;
    }

    function disableHover() {
        hovering = false;
    }
</script>

<div on:mouseenter={enableHover} on:mouseleave={disableHover}
     on:focus={enableHover} on:blur={disableHover}
     tabindex="0" role="button">
    <slot {hovering}/>
</div>

<style>
    div {
        width: 100%;
        padding: 1rem;
        background: var(--bg-secondary);
        border-bottom: 1px solid var(--text-tertiary);
        display: flex;
        align-items: center;

        &:hover {
            cursor: default;
        }
    }
</style>
