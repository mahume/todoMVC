<script lang="ts">
    import NavList from "$lib/components/navigation/NavList.svelte";
    import TodoCount from "$lib/components/navigation/TodoCount.svelte";
    import TodoClear from "$lib/components/navigation/TodoClear.svelte";
</script>

<div class="navbar">
    <TodoCount/>
    <NavList/>
    <TodoClear/>
</div>

<style>
    .navbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 300;

        background-color: var(--bg-secondary);
        padding: .1rem 1.2rem;
    }
</style>
