<script lang="ts">
    import NavList from "$lib/components/navigation/NavList.svelte";
    import {todoListStore} from "../../../Store";

    function handleClick() {
        console.log('clear')
        todoListStore.clearCompleted();
    }
</script>

<div>
    <p class="info">{$todoListStore.length} items left</p>
    <NavList />
    <button on:click={handleClick}>
        <span class="clear">Clear completed</span>
    </button>
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

    span {
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
