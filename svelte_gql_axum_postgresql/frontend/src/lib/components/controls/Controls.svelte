<script>
    import FilterList from "$lib/components/controls/FilterList.svelte";

    export let totalTodos = 0;
</script>

<div>
    <p class="info">{totalTodos} items left</p>
    <FilterList />
    <p class="clear">Clear completed</p>
</div>

<style>
    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 300;

        background-color: var(--bg-secondary);
        padding: 1rem 1.5rem;
    }

    p {
        align-items: center;
        color: var(--text-secondary);
        margin: 0;

        &.info {
            justify-self: flex-start;
        }

        &.clear {
            justify-self: flex-end;

            &:hover {
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }

</style>
