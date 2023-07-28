<script lang="ts">
    import List from "$lib/components/List.svelte";
    import {todoListStore} from "../../Store";

    $: todos = $todoListStore.filter((todo) => todo.completed);
</script>

<List {todos} />
