<script lang="ts">
    import TodoList from "$lib/components/todos/TodoList.svelte";
    import {todoListStore} from "../Store";
</script>

<TodoList todos={$todoListStore} />
