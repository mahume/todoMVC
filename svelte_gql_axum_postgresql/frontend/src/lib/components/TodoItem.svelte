<script lang="ts">
    import TodoContainer from "$lib/components/TodoContainer.svelte";
    import Checkmark from "$lib/components/icons/Checkmark.svelte";
    import Remove from "$lib/components/icons/Remove.svelte";
    import type {Todo} from "$lib/types/types";

    export let todo: Todo;
</script>

<TodoContainer let:hovering={hovering}>
    <Checkmark {todo} />
    <p class:completed={todo.completed}>{todo.text}</p>
    {#if hovering}
        <Remove {todo} />
    {/if}
</TodoContainer>

<style>
    p {
        font-size: 1.5rem;
        font-weight: 100;
        font-family: inherit;
        height: 100%;
        width: 100%;
        border: none;
        padding: 0;
        margin: 0;
        transition: color 200ms ease-out,
                    text-decoration 200ms ease-out;

        &:focus {
            outline: none;
        }
    }

    .completed {
        text-decoration: line-through;
        color: var(--text-disabled);
    }
</style>
