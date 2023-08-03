<main class="grid">
    <header>
        <Heading />
    </header>

    <section>
        <Input />
        <slot />
        <Navbar />
    </section>
</main>

<script lang="ts">
    // import '../reset.css';
    import '../app.css';
    import Heading from "$lib/components/Heading.svelte";
    import Input from "$lib/components/input/Input.svelte";
    import Navbar from "$lib/components/navigation/Navbar.svelte";
</script>

<style>
    .grid {
        width: 100vw;
        height: 100vh;

        display: grid;
        grid-template-rows: 100px auto 1fr;
        grid-template-columns: 1fr 600px 1fr;
        grid-row-gap: 1rem;
    }

    header {
        grid-row: 1;
        grid-column: 2;
    }

    section {
        grid-column: 2;
        grid-row: 2;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
        0 25px 50px 0 rgba(0, 0, 0, 0.1);
    }
</style>
