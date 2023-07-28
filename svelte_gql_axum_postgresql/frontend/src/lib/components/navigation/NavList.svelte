<script lang="ts">
    import NavLink from "./NavLink.svelte";
</script>

<ul>
    <NavLink route="/" name="All" />
    <NavLink route="/active" name="Active" />
    <NavLink route="/completed" name="Completed" />
</ul>

<style>
    ul {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
    }
</style>
