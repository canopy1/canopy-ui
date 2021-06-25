import { css } from "lit";

/**

CanopyUI consumers provide CSS variables for the given components like the following 
<style> does.

<style>
    cnpy-payment-details {
        --cnpy-primary-color: darkblue;
    }
</style>

 */


export const paymentDetailsCSS = css`
    :host {
        display: block;
        border: solid 1px #333;
        border-radius: 16px;
        background-color: #fff;
        padding: 32px;
        max-width: 800px;
    }

    hr {
        margin: 2rem 0;
    }

    cnpy-stat {
        display: flex;
        flex-flow: column nowrap;
    }

    cnpy-stat span[part="label"] {
        margin-bottom: 1rem;
    }

    cnpy-stat span[part="value"] {
        font-size: 2rem;
        font-weight: 600;
        color: var(--cnpy-primary-color);
    }

    cnpy-stat-sm {
        display: flex;
        flex-flow: column nowrap;
    }

    cnpy-stat-sm span[part="label"] {
        margin-bottom: 1rem;
    }

    cnpy-stat-sm span[part="value"] {
        font-weight: 500;
    }

    slot[name="top"] {
        display: flex;
        flex-flow: row wrap;
    }

    slot[name="top"] > * {
        margin-right: 2rem;
    }

    slot[name="top"] > *:last-child {
        margin-right: 0;
    }

    slot[name="bottom"] {
        display: flex;
        flex-flow: row wrap;
    }

    slot[name="bottom"] > * {
        margin-right: 2rem;
    }

    slot[name="bottom"] > *:last-child {
        margin-right: 0;
    }
`;
