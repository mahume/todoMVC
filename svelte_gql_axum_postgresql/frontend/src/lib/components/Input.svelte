<input placeholder="What needs to be done?"/>

<style>
    input {
        width: 100%;
        padding: 16px 16px 16px 60px;
        border: none;
        background: var(--bg-secondary);
        font-size: 1.5rem;
        font-weight: 100;
        font-family: inherit;

        &::placeholder {
            font-style: italic;
            /*font-weight: 100;*/
            color: var(--text-terciary);
        }

        &:focus {
            outline: none;
        }
    }
</style>
