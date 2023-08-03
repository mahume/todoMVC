<TodoList todos={$todoListStore} />

<script lang="ts">
    import TodoList from "$lib/components/todo/TodoList.svelte";
    import {todoListStore} from "../Store";
</script>
