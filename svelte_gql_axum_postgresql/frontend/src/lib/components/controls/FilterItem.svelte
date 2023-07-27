<script lang="ts">
    export let filterItem: {
        name: string,
        isActive: boolean
    };
</script>

<li class:active={filterItem.isActive}>{filterItem.name}</li>

<style>
    li {
        border-width: 1px;
        border-style: solid;
        border-color: var(--bg-secondary);
        border-radius: .25rem;
        padding: .5rem .75rem;
        list-style: none;
        color: var(--text-secondary);

        &:not(:last-child) {
            margin-right: 1rem;
        }

        &:hover {
            cursor: pointer;
            border-color: var(--border-secondary);
        }

        &.active {
            border-color: var(--border-tertiary);
        }
    }
</style>
