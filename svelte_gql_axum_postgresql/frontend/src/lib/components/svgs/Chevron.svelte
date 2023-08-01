<svg width="801" height="447" viewBox="0 0 801 447" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.69353e-06 46.3509C2.21068e-06 34.5198 4.50625 22.6413 13.5921 13.577C31.6948 -4.52564 60.9897 -4.52563 79.0923 13.577L399.998 334.504L720.925 13.577C739.028 -4.52561 768.348 -4.5256 786.425 13.577C804.528 31.6797 804.528 61.0005 786.425 79.0988L432.772 432.752C414.669 450.855 385.348 450.855 367.272 432.752L13.5965 79.0988C4.53218 70.0647 1.17524e-06 58.2078 1.69353e-06 46.3509Z"
          class:focused={isFocused}/>
</svg>

<script lang="ts">
    export let isFocused: boolean;
</script>

<style>
    svg {
        width: 1.25rem;
        height: 1.25rem;
    }

    path {
        fill: #E6E6E6;
    }

    .focused {
        fill: var(--bg-tertiary);
    }
</style>
