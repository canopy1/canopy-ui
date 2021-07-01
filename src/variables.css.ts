import { html } from "lit";

// TODO: Build script to generate variables.css from this
export const CSSTemplateVars = html`
<style>
  :root {
    /* Colors */
    --cui-color-primary:            #4867FF;
    --cui-color-primary-lighten:    #68ADFF;
    --cui-color-primary-darken:     #443CF8;
    --cui-color-secondary:          #00C4FF;
    --cui-color-success:            #00BD7E;
    --cui-color-warning:            #FA8C16;
    --cui-color-danger:             #FF434E;
    --cui-color-black:              #05102E;
    --cui-color-white:              #ffffff;
  
    --cui-background-color-light:   var(--cui-color-white);
    --cui-background-color-faded:   #FBFCFF;
    --cui-background-color-dark:    #0C1B45;
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
    --cui-border-color:             #E1E4F2;
    --cui-border-color-active:      var(--cui-color-primary-lighten);
    --cui-border-style:             solid;
    --cui-border-width:             1px;
  
    /* Box Shadow */
    --cui-box-shadow:               0px 4px 16px rgba(5, 16, 46, 0.04);
    --cui-box-shadow-sm:            0px 2px 0px rgba(5, 16, 46, 0.02);
    --cui-box-shadow-lg:            0px 6px 32px rgba(5, 16, 46, 0.04);
  
    /* Spacing */
    --cui-spacing-1:                4px;
    --cui-spacing-2:                8px;
    --cui-spacing-3:                16px;
    --cui-spacing-4:                24px;
    --cui-spacing-5:                32px;
    --cui-spacing-6:                48px;
    --cui-spacing-7:                56px;
    --cui-spacing-8:                64px;
    --cui-spacing-9:                72px;

    /* Button */
    --cui-btn-background-color:         var(--cui-color-primary);
    --cui-btn-background-color-hover:   var(--cui-color-primary-darken);
    --cui-btn-text-color:               var(--cui-color-white);
    --cui-btn-border-width:             0;
    --cui-btn-border-color:             transparent;
    --cui-btn-border-style:             solid;
    --cui-btn-box-shadow:               0px 0px 0px 0px rgba(0, 0, 0, 0.12), var(--cui-box-shadow-sm);
    --cui-btn-box-shadow-active:        0px 0px 0px 3px rgba(0, 0, 0, 0.12), var(--cui-box-shadow-sm);
    --cui-btn-height:                   40px;
    --cui-btn-outline:                  none;
    --cui-btn-padding-horizontal:       var(--cui-spacing-3);
    --cui-btn-padding-vertical:         var(--cui-spacing-2);
    --cui-btn-transition:               all 0.2s ease;

    /* Inputs */
    --cui-input-background-color:       var(--cui-color-white);
    --cui-input-border-color:           var(--cui-border-color);
    --cui-input-border-color-active:    var(--cui-border-color-active);
    --cui-input-border-style:           var(--cui-border-style);
    --cui-input-border-width:           var(--cui-border-width);
    --cui-input-border-radius:          var(--cui-border-radius-sm);
    --cui-input-box-shadow:             0px 0px 0px 0px rgba(0, 0, 0, 0.04), var(--cui-box-shadow-sm);
    --cui-input-box-shadow-active:      0px 0px 0px 3px rgba(0, 0, 0, 0.04), var(--cui-box-shadow-sm);
    --cui-input-height:                 40px;
    --cui-input-line-height:            var(--cui-input-height);
    --cui-input-padding-horizontal:     var(--cui-spacing-3);
    --cui-input-padding-vertical:       0;
    --cui-input-text-color:             var(--cui-text-color-body);
    --cui-input-placeholder-color:      var(--cui-text-color-light);
    --cui-input-transition:             all 0.2s ease;
  }
</style>
`