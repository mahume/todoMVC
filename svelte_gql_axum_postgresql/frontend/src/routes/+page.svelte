<TodoList todos={allTodos} />

<script lang="ts">
    import TodoList from "$lib/components/todo/TodoList.svelte";
    import {todoListStore} from "../Store";

    $: allTodos = $todoListStore;
</script>
