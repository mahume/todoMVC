<script lang="ts">
    import List from "$lib/components/List.svelte";
    import {todoListStore} from "../Store";
</script>

<List todos={$todoListStore} />
