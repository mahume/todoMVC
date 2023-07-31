<script>
    import {todoListStore} from "../../../Store";
</script>

<p class="info">{$todoListStore.length} items left</p>

<style>
    .info {
        text-align: center;
        color: var(--text-secondary);
    }
</style>
