<script>
    export let totalTodos = 0;
</script>

<div>
    <p>{totalTodos} items left</p>
    <ul>
        <li>All</li>
        <li>Active</li>
        <li>Completed</li>
    </ul>
</div>

<style>
    div {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
        align-items: center;
        justify-items: center;

        background-color: var(--bg-secondary);
        padding: 1rem;
        border-top: 1px solid var(--text-terciary);
    }

    p {
        align-items: center;
        color: var(--text-secondary);
        margin: 0;
    }

    ul {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
    }

    li {
        border-width: 1px;
        border-style: solid;
        border-color: var(--text-terciary);
        border-radius: .25rem;
        padding: .5rem;
        list-style: none;
        color: var(--text-secondary);
    }
</style>
