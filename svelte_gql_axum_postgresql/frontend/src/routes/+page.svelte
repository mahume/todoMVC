<script lang="ts">
    import List from "$lib/components/List.svelte";
    import {todoListStore} from "../Store";

    $: console.log($todoListStore)
</script>

<List todos={$todoListStore} />
