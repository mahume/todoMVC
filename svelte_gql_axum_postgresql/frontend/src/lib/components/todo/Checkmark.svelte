<label>
    <input bind:checked={isChecked} on:change={handleCheckboxChange} type="checkbox">
    <span>
        {#if todo.completed}
            <Check />
        {/if}
    </span>
</label>

<script lang="ts">
    import {todoListStore} from "../../../Store";
    import Check from "$lib/components/svgs/Check.svelte";
    import type {Todo} from "$lib/types/types";

    export let todo: Todo;
    let isChecked = todo.completed;

    function handleCheckboxChange(event: Event) {
        todo.completed = isChecked;

        todoListStore.check(todo.id, isChecked);
    }
</script>

<style>
    label {
        position: relative;
        display: inline-block;
        margin-right: 1rem;

        & input[type="checkbox"] {
            display: none;
        }

        & span {
            position: relative;
            width: 2rem;
            height: 2rem;
            background-color: var(--bg-secondary);
            border: 1px solid var(--text-tertiary);
            border-radius: 50%;
            cursor: pointer;
            transition: all 0.3s ease;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
