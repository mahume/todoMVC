<script lang="ts">
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher<{ delete: true }>();

    function handleDelete() {
        dispatch('delete', true);
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
