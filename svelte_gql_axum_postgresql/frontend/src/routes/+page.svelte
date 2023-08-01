<script lang="ts">
    import TodoList from "$lib/components/todos/TodoList.svelte";
    import {todoListStore} from "../Store";

    $: allTodos = $todoListStore;
</script>

<TodoList todos={allTodos} />
