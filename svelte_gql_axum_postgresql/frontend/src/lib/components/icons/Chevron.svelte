<script lang="ts">
    import {todoListStore} from "../../../Store.js";

    function handleCompleteAll() {
        console.log('test')
        todoListStore.toggleAll();
    }
</script>

<div on:click={handleCompleteAll} on:keyup={handleCompleteAll}
     tabindex="0" role="button">
    <img src="/icons/chevron.svg" alt="chevron icon">
</div>

<style>
    div {
        width: 2rem;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;

        &:hover {
            cursor: pointer;
        }
    }

    img {
        width: 1.25rem;
        height: 1.25rem;
    }
</style>
