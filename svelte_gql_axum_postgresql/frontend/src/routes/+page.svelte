<script lang="ts">
    import Input from "$lib/components/Input.svelte";
    import Heading from "$lib/components/Heading.svelte";
    import List from "$lib/components/List.svelte";
    import Controls from "$lib/components/Controls.svelte";

    let todos: Array<string> = ['First'];

    function handleNewTodo(event: CustomEvent) {
        console.log(todos)
        todos = [...todos, event.detail];
    }
</script>

<main class="grid">
    <header>
        <Heading />
    </header>

    <section>
        <Input on:addTodo={handleNewTodo} />
        <List {todos} />
        <Controls />
    </section>
</main>

<style>
    .grid {
        width: 100vw;
        height: 100vh;

        display: grid;
        grid-template-rows: 100px auto 1fr;
        grid-template-columns: 1fr 600px 1fr;
        grid-row-gap: 1rem;
    }

    header {
        grid-row: 1;
        grid-column: 2;
    }

    section {
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);

        grid-column: 2;
        grid-row: 2;
    }
</style>
