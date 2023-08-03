<TodoList todos={completedTodos} />

<script lang="ts">
    import TodoList from "$lib/components/todos/TodoList.svelte";
    import {todoListStore} from "../../Store";

    $: completedTodos = $todoListStore.filter((todo) => todo.completed);
</script>
