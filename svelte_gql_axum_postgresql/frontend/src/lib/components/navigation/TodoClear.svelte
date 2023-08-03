<button on:click={handleClick} class:hidden={!hasCompleted}>
    <span class="clear">Clear completed</span>
</button>

<script lang="ts">
    import {todoListStore} from "../../../Store";

    $: hasCompleted = $todoListStore.some((todo) => todo.completed);

    function handleClick() {
        todoListStore.clearCompleted();
    }
</script>

<style>
    button {
        border: none;
        background-color: transparent;
    }

    .hidden {
        visibility: hidden;
        pointer-events: none;
    }

    .clear {
        align-items: center;
        color: var(--text-secondary);
        margin: 0;
        font-weight: 300;
        justify-self: flex-end;
        font-size: 1rem;

        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }
</style>
