import { html } from "lit"

// TODO: Build script to generate variables.css from this
export const CSSTemplateVars = html`
<style>
  :root {
    /* Colors */
    --cui-color-primary:            #4867FF;
    --cui-color-secondary:          #00C4FF;
    --cui-color-success:            #00BD7E;
    --cui-color-warning:            #FA8C16;
    --cui-color-danger:             #FF434E;
    --cui-color-black:              #05102E;
  
    --cui-background-color-light:   #ffffff;
    --cui-background-color-dark:    #0C1B45;
    --cui-background-color-faded:   #FBFCFF;
    --cui-text-color-body:          #3E4E7A;
    --cui-text-color-headers:       #0C1B45;
    --cui-text-color-light:         #C9CEDE;
  
  
    /* Typography */
    --cui-font-family-base:         -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    --cui-font-family-headers:      var(--cui-font-family-base);
    --cui-font-size-base:           1rem;
    --cui-font-size-xs:             .75rem;
    --cui-font-size-sm:             .875rem;
    --cui-font-size-lg:             1.25rem;
    --cui-font-size-xl:             1.5rem;
    --cui-font-size-h4:             2rem;
    --cui-font-size-h3:             2.5rem;
    --cui-font-size-h2:             3rem;
    --cui-font-size-h1:             4rem;
    --cui-font-weight-bold:         700;
    --cui-font-weight-semibold:     500;
  
    /* Border Radius */
    --cui-border-radius:            16px;
    --cui-border-radius-sm:         8px;

    /* Borders */
    --cui-border-width:             1px;
    --cui-border-color:             #E1E4F2;
    --cui-border-style:             solid;
  
    /* Box Shadow */
    --cui-box-shadow:               0px 4px 16px rgba(5, 16, 46, 0.04);
    --cui-box-shadow-lg:            0px 6px 32px rgba(5, 16, 46, 0.04);
  
    /* Spacing */
    --cui-spacing-1:                  4px;
    --cui-spacing-2:                  8px;
    --cui-spacing-3:                  16px;
    --cui-spacing-4:                  24px;
    --cui-spacing-5:                  32px;
    --cui-spacing-6:                  48px;
    --cui-spacing-7:                  56px;
    --cui-spacing-8:                  64px;
    --cui-spacing-9:                  72px;
  }
</style>
`
