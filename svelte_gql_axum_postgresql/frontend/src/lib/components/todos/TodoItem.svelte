<TodoContainer let:hovering={hovering}>
    <Checkmark {todo}/>
    <TodoText {todo}/>
    <Remove {todo} {hovering}/>
</TodoContainer>

<script lang="ts">
    import TodoContainer from "$lib/components/TodoContainer.svelte";
    import Checkmark from "$lib/components/icons/Checkmark.svelte";
    import Remove from "$lib/components/icons/Remove.svelte";
    import TodoText from "$lib/components/todos/TodoText.svelte";
    import type {Todo} from "$lib/types/types";
    import {todoListStore} from "../../../Store";

    export let todo: Todo;
    $: console.log($todoListStore)
</script>
