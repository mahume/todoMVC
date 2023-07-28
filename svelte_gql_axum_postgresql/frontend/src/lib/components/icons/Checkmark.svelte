<script lang="ts">
    import {todoListStore} from "../../../Store";
    import type {Todo} from "$lib/types/types";

    export let todo: Todo;

    $: isChecked = todo.completed;

    $: if (isChecked !== todo.completed) {
        todoListStore.check(todo.id, isChecked);
    }
</script>

<label>
    <input bind:checked={isChecked} type="checkbox">
    <span>
        {#if isChecked}
            <img src="/icons/check.svg" alt="checkmark icon">
        {/if}
    </span>
</label>

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

    img {
        width: 1rem;
        height: 1rem;
    }
</style>
