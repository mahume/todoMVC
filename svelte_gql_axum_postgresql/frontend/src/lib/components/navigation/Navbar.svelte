<script lang="ts">
    import NavList from "$lib/components/navigation/NavList.svelte";
    import {todoListStore} from "../../../Store";

    function onClick() {
        todoListStore.clearCompleted();
    }
    function onKeyUp(e: KeyboardEvent) {
        if (e.key === "Enter") {
            todoListStore.clearCompleted();
        }
    }
</script>

<div>
    <p class="info">{$todoListStore.length} items left</p>
    <NavList />
    <div on:click={onClick} on:keyup={onKeyUp}
         tabindex="0" role="button">
        <p class="clear">Clear completed</p>
    </div>
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
