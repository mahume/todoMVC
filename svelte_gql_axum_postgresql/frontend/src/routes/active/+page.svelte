<script lang="ts">
    import TodoList from "$lib/components/todos/TodoList.svelte";
    import {todoListStore} from "../../Store";

    $: activeTodos = $todoListStore.filter((todo) => !todo.completed);
</script>

<TodoList todos={activeTodos} />
