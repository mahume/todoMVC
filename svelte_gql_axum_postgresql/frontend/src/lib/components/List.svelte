<script lang="ts">
    import TodoItem from "$lib/components/TodoItem.svelte";
    import type {Todo} from "$lib/types/types";

    export let todos: Array<Todo> = [];

    function deleteTodo(event: CustomEvent<{ id: number }>) {
        todos = todos.filter((todo) => todo.id !== event.detail.id);
    }
</script>

<ul>
    {#each todos as todo}
        <li>
            <TodoItem todo={todo} on:delete={deleteTodo}/>
        </li>
    {/each}
</ul>

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
