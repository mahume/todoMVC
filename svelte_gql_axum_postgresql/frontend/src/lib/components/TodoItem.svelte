<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import TodoContainer from "$lib/components/TodoContainer.svelte";
    import Checkmark from "$lib/components/icons/Checkmark.svelte";
    import Remove from "$lib/components/icons/Remove.svelte";
    import type {Todo} from "$lib/types/types";

    export let todo: Todo;

    const dispatch = createEventDispatcher<{ delete: { id: number } }>();

    function handleCheck(event: CustomEvent<boolean>) {
        todo.completed = event.detail;
    }
    function handleDelete() {
        dispatch('delete', { id: todo.id });
    }
</script>

<TodoContainer let:hovering={hovering}>
    <Checkmark on:checked={handleCheck}/>
    <p class:completed={todo.completed}>{todo.text}</p>
    {#if hovering}
        <Remove on:delete={handleDelete}/>
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
