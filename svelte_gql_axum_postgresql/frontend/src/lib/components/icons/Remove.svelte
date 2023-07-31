<script lang="ts">
    import {todoListStore} from "../../../Store";
    import type {Todo} from "$lib/types/types";

    export let todo: Todo;

    function handleDelete() {
        console.log('Clicked')
        todoListStore.delete(todo.id)
    }
</script>

<span on:click={handleDelete} on:keydown={handleDelete}
      role="button" tabindex="0">
    <img src="/icons/cross.svg" alt="close icon" class="cross-icon">
</span>

<style>
    span {
        width: 2rem;
        height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;

        &:hover {
            cursor: pointer;
        }

        &:hover img {
            opacity: 1;
        }
    }

    img {
        opacity: 0.3;
        transition: opacity 0.2s ease;
    }
</style>
