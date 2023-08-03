<TodoContainer let:hovering={hovering}>
    <Checkmark {todo}/>
    <TodoText {todo}/>
    <Remove {todo} {hovering}/>
</TodoContainer>

<script lang="ts">
    import TodoContainer from "$lib/components/TodoContainer.svelte";
    import Checkmark from "$lib/components/todo/Checkmark.svelte";
    import Remove from "$lib/components/todo/Remove.svelte";
    import TodoText from "$lib/components/todo/TodoText.svelte";
    import type {Todo} from "$lib/types/types";
    import {todoListStore} from "../../../Store";

    export let todo: Todo;
    $: console.log($todoListStore)
</script>
