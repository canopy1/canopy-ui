import { html } from "lit";

/**

CanopyUI consumers provide CSS variables for the given components like the following 
<style> does.

<style>
    cnpy-payment-details {
        --cnpy-primary-color: darkblue;
    }
</style>

 */


export const paymentDetailsCSS = html`
<style>
  :root {
    /* Colors */
    --color-primary:            #4867FF;
    --color-secondary:          #00C4FF;
    --color-success:            #00BD7E;
    --color-warning:            #FA8C16;
    --color-danger:             #FF434E;
    --color-black:              #05102E;
  
    --background-color-light:   #ffffff;
    --background-color-dark:    #0C1B45;
    --background-color-faded:   #FBFCFF;
    --text-color-body:          #3E4E7A;
    --text-color-headers:       #0C1B45;
    --text-color-light:         #C9CEDE;
  
  
    /* Typography */
    --font-family-base:         -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --font-family-headers:      var(--font-family-base);
    --font-size-base:           1rem;
    --font-size-sm:             .75rem;
    --font-size-lg:             1.25rem;
    --font-size-xl:             1.5rem;
    --font-size-h4:             2rem;
    --font-size-h3:             2.5rem;
    --font-size-h2:             3rem;
    --font-size-h1:             4rem;
    --font-weight-bold:         700;
  
    /* Border Radius */
    --border-radius:            16px;
    --border-radius-sm:         8px;
  
    /* Box Shadow */
    --box-shadow:               0px 4px 16px rgba(5, 16, 46, 0.04);
    --box-shadow-lg:            0px 6px 32px rgba(5, 16, 46, 0.04);
  
    /* Spacing */
    --space-1:                  4px;
    --space-2:                  8px;
    --space-3:                  16px;
    --space-4:                  24px;
    --space-5:                  32px;
    --space-6:                  48px;
    --space-7:                  56px;
    --space-8:                  64px;
    --space-9:                  72px;
  }

  

    cnpy-payment-details {
        display: block;
        border: solid 1px #333;
        border-radius: 16px;
        background-color: #fff;
        padding: 32px;
        max-width: 800px;
        font-family: var(--font-family-base);
        color: var(--text-color-body);
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
</style>
`;
