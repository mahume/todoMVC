<script lang="ts">
    import TodoContainer from "$lib/components/TodoContainer.svelte";
    import Checkmark from "$lib/components/icons/Checkmark.svelte";
    import Remove from "$lib/components/icons/Remove.svelte";
    import type {Todo} from "$lib/types/types";

    export let todo: Todo;
</script>

<TodoContainer>
    <Checkmark />
    <input type="text" value="{todo.text}" readonly />
    <Remove />
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
