<TodoList todos={activeTodos} />

<script lang="ts">
    import TodoList from "$lib/components/todo/TodoList.svelte";
    import {todoListStore} from "../../Store";

    $: activeTodos = $todoListStore.filter((todo) => !todo.completed);
</script>
