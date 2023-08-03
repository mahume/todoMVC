<ul>
    <NavLink route="/" name="All" />
    <NavLink route="/active" name="Active" />
    <NavLink route="/completed" name="Completed" />
</ul>

<script lang="ts">
    import NavLink from "./NavLink.svelte";
</script>

<style>
    ul {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
    }
</style>
