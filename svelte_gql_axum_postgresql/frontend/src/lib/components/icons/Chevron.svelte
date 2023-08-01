<button on:click={handleClick}>
    <Chevron isFocused={allCompleted} />
</button>

<script lang="ts">
    import {todoListStore} from "../../../Store.js";
    import Chevron from "$lib/components/svgs/Chevron.svelte";

    $: allCompleted = $todoListStore.every(todo => todo.completed)
        && $todoListStore.length > 0;

    function handleClick() {
        allCompleted
            ? todoListStore.toggleAll(false)
            : todoListStore.toggleAll(true);
    }
</script>

<style>
    button {
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
        border: none;
        background: transparent;

        &:hover {
            cursor: pointer;
        }
    }
</style>
