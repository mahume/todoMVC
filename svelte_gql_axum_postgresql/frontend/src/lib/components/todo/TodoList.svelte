<ul>
    {#each todos as todo}
        <li>
            <TodoItem todo={todo}/>
        </li>
    {/each}
</ul>

<script lang="ts">
    import TodoItem from "$lib/components/todo/TodoItem.svelte";
    import type {Todo} from "$lib/types/types";

    export let todos: Array<Todo> = [];
</script>

<style>
    ul {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    li {
        width: 100%;
        background-color: var(--bg-secondary);
        list-style-type: none;
    }
</style>
