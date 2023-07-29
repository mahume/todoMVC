<script lang="ts">
    import {todoListStore} from "../../../Store.js";

    let completed = false;

    function handleCompleteAll() {
        todoListStore.toggleAll(!completed);
        completed = !completed;
    }
</script>

<button on:click={handleCompleteAll}>
    <img src="/icons/chevron.svg" alt="chevron icon">
</button>

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

    img {
        width: 1.25rem;
        height: 1.25rem;
    }
</style>
