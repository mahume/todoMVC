<script>
    import Input from "./Input.svelte";
</script>

<ul>
    <li>
        <Input />
    </li>
    <li>
        <Input />
    </li>
</ul>

<style>
    ul {
        width: 100%;
        margin: 0;
        padding: 0;
    }

    li {
        width: 100%;
        background-color: var(--bg-secondary);
        list-style-type: none;
    }
</style>
