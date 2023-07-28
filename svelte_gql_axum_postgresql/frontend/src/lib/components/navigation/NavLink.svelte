<script lang="ts">
    import { page } from '$app/stores';

    export let name: string;
    export let route: string;

    $: isActive = $page.route.id === route;
</script>

<li class:active={isActive}>
    <a href={route}>{name}</a>
</li>

<style>
    li {
        border-width: 1px;
        border-style: solid;
        border-color: var(--bg-secondary);
        border-radius: .25rem;
        padding: .5rem .75rem;
        list-style: none;
        color: var(--text-secondary);

        &:not(:last-child) {
            margin-right: 1rem;
        }

        &:hover {
            cursor: pointer;
            border-color: var(--border-secondary);
        }

        &.active {
            border-color: var(--border-tertiary);
        }
    }

    a {
        padding: 0;
        color: inherit;
        text-decoration: none;
    }
</style>
