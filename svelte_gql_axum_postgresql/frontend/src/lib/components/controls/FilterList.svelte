<script>
    import FilterItem from "$lib/components/controls/FilterItem.svelte";

    const filterItems = [{
        name: 'All',
        isActive: true
    }, {
        name: 'Active',
        isActive: false
    }, {
        name: 'Completed',
        isActive: false
    }];
</script>

<ul>
    {#each filterItems as filterItem}
        <FilterItem {filterItem} />
    {/each}
</ul>

<style>
    ul {
        display: flex;
        justify-content: space-between;
        margin: 0;
        padding: 0;
    }
</style>
