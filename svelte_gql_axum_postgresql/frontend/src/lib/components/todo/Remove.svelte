<button on:click={handleDelete} class:isVisible="{hovering}">
    <img src="/icons/cross.svg" alt="close icon" class="cross-icon">
</button>

<script lang="ts">
    import {todoListStore} from "../../../Store";
    import type {Todo} from "$lib/types/types";

    export let todo: Todo;
    export let hovering: boolean;

    function handleDelete(event: Event) {
        console.log($todoListStore)
        console.log('Clicked X', event)
        todoListStore.delete(todo.id)
        console.log($todoListStore)
    }
</script>

<style>
    button {
        width: 2rem;
        height: 2rem;
        border: none;
        background-color: transparent;
        display: flex;
        justify-content: center;
        align-items: center;
        visibility: hidden;

        &:hover {
            cursor: pointer;
        }

        &:hover img {
            opacity: 1;
        }

        &.isVisible {
            visibility: visible;
        }
    }

    img {
        opacity: 0.3;
        transition: opacity 0.2s ease;
        pointer-events: none;
    }
</style>
