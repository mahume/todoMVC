<script lang="ts">
    import TodoContainer from "$lib/components/TodoContainer.svelte";
    import Chevron from "$lib/components/icons/Chevron.svelte";
    import {todoListStore} from "../../Store";

    let newTodo = '';

    function addTodo(e: KeyboardEvent) {
        const isCarriageReturnPressed = e.key === 'Enter';
        const hasValue = newTodo.trim();

        if (isCarriageReturnPressed && hasValue) {
            todoListStore.add({
                id: $todoListStore.length + 1,
                text: newTodo.trim(),
                completed: false,
            })
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
            color: var(--text-tertiary);
        }

        &:focus {
            outline: none;
        }
    }
</style>
