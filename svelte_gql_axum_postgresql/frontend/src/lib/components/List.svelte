<script lang="ts">
    import Todo from "$lib/components/Todo.svelte";

    export let todos: Array<string> = [];
</script>

<ul>
    {#each todos as value}
        <li>
            <Todo {value} />
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
