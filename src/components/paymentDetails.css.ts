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
    --font-size-xs:             .75rem;
    --font-size-sm:             .875rem;
    --font-size-lg:             1.25rem;
    --font-size-xl:             1.5rem;
    --font-size-h4:             2rem;
    --font-size-h3:             2.5rem;
    --font-size-h2:             3rem;
    --font-size-h1:             4rem;
    --font-weight-bold:         700;
    --font-weight-semibold:     500;
  
    /* Border Radius */
    --border-radius:            16px;
    --border-radius-sm:         8px;

    /* Borders */
    --border-width:             1px;
    --border-color:             #E1E4F2;
    --border-style:             solid;
  
    /* Box Shadow */
    --box-shadow:               0px 4px 16px rgba(5, 16, 46, 0.04);
    --box-shadow-lg:            0px 6px 32px rgba(5, 16, 46, 0.04);
  
    /* Spacing */
    --spacing-1:                  4px;
    --spacing-2:                  8px;
    --spacing-3:                  16px;
    --spacing-4:                  24px;
    --spacing-5:                  32px;
    --spacing-6:                  48px;
    --spacing-7:                  56px;
    --spacing-8:                  64px;
    --spacing-9:                  72px;
  }

  cnpy-payment-details {
    background-color: var(--background-color-light);
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow-lg);
    color: var(--text-color-body);
    display: block;
    font-family: var(--font-family-base);
    font-size: var(--font-size-base);
    width: 900px; /* TODO: Make Responsive */
  }

  cnpy-stat {
    display: flex;
    flex-flow: column nowrap;
  }

  cnpy-stat span[part="label"] {
    font-size: var(--font-size-sm);
    margin-bottom: var(--spacing-1);
  }

  cnpy-stat span[part="value"] {
    color: var(--color-primary) !important;
    font-size: var(--font-size-h4);
    font-weight: var(--font-weight-bold);
    color: var(--cnpy-primary-color);
  }

  cnpy-stat-sm {
    display: flex;
    flex-flow: column nowrap;
  }

  cnpy-stat-sm span[part="label"] {
    font-size: var(--font-size-xs);
    margin-bottom: var(--spacing-1);
  }

  cnpy-stat-sm span[part="value"] {
    color: var(--text-color-headers);
    font-weight: var(--font-weight-semibold);
  }

  slot[name="top"] {
    border-bottom: var(--border-width) var(--border-color) var(--border-style);
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: auto; 
    column-gap: var(--spacing-4);
    padding: var(--spacing-5);
  }

  slot[name="bottom"] {
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    grid-template-rows: auto; 
    column-gap: var(--spacing-4);
    padding: var(--spacing-4) var(--spacing-5);
  }
</style>
`;
