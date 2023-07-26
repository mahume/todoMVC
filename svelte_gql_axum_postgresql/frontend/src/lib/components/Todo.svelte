<script lang="ts">
    import TodoContainer from "$lib/components/TodoContainer.svelte";

    export let value = '';
</script>

<TodoContainer>
    <input
            type="text"
            value="{value}"
            readonly
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

        &:focus {
            outline: none;
        }
    }
</style>
