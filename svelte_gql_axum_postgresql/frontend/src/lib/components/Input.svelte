<script lang="ts">
    import {createEventDispatcher} from "svelte";
    import TodoContainer from "$lib/components/TodoContainer.svelte";
    import Chevron from "$lib/components/icons/Chevron.svelte";
    import type {Todo} from "$lib/types/types";

    const dispatch = createEventDispatcher<{ addTodo: Todo }>();

    export let newTodo = '';
    export let totalTodos: number;

    function addTodo(e: KeyboardEvent) {
        const isCarriageReturnPressed = e.key === 'Enter';
        const hasValue = newTodo.trim();

        if (isCarriageReturnPressed && hasValue) {
            dispatch('addTodo', {
                id: totalTodos + 1,
                text: newTodo.trim(),
                completed: false,
            });
            newTodo = '';
        }
    }
</script>

<TodoContainer>
    <Chevron />
    <input
            bind:value="{newTodo}"
            on:keydown="{addTodo}"
            placeholder="What needs to be done?"
            type="text"
    />
</TodoContainer>

<style>
    input {
        font-size: 1.5rem;
        font-weight: 100;
        font-family: inherit;
        height: 100%;
        width: 100%;
        border: none;
        padding: 0;

        &::placeholder {
            font-style: italic;
            color: var(--text-terciary);
        }

        &:focus {
            outline: none;
        }
    }
</style>
