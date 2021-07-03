# CanopyUI

CanopyUI is a library of WebComponents you can use regardless of your tech stack. Our public
Storybook preview is hosted on Github Pages at https://canopy1.github.io/canopy-ui/. You can walk
through our Storybook to see what properties are supported and experiment with dynamic properties
yourself.

![CanopyUI](https://user-images.githubusercontent.com/1096881/110418148-98923f80-805c-11eb-9c70-0654ed0eae00.png)

## Usage

```
# install
yarn add @canopyinc/ui

# import then bundle with your other JS
import "@canopyinc/ui"

# optional choice to load CSS directly
<link href="https://unpkg.com/@canopyinc/ui/src/variables.css" rel="stylesheet'>
```

Then once the JS is loaded you can start writing with CanopyUI's web components.

```html
  <div id="my-container"></div>
  
  <script>
    // with JavaScript
    const accountDetails = {
      amount: 349392,
      credit_limit: 800000,
      available_credit: 450608,
      pending_charges: 0,
      promo_exp: "10/15/2021"
    }

    const accountOverviewEl = document.createElement('cui-account-overview');
    accountOverviewEl.setAttribute('details', JSON.stringify(accountDetails));

    document.getElementById("my-container").appendChild(accountOverviewEl);
  </script>
```

Since CanopyUI is built from the WebComponents set of standards you may also write HTML markup
directly.

```html
<!-- NOTE: All properties should be passed strings including objects and arrays. -->
<cui-account-overview
  details="..."
>
</cui-account-overview>
```

## Styling

To theme CanopyUI components with a custom CSS property, pass a supported custom property to the
`:root { ... }` CSS selector. For more granularity per component you can also target the name of the
component with a CSS selector directly such as `cui-account-overview { ... }`.

Refer to the Styling doc for a list of supported CSS properties.

```html
<style>
  :root {
    --cui-color-primary: darkblue;
  }
</style>
<cui-account-overview
  details="..."
>
</cui-account-overview>
```

## Local Setup

```
# install package dependencies
yarn install

# compile typescript
yarn build

# run tests
yarn test

# run storybook server
yarn storybook
```

Storybook will reload any changes you make. You are able to change background colors in Storybook
for better contrast.

## Available Components

As of v0.1.0:

- [x] Account Overview
- [x] Amortization Schedule
- [x] Payments
- [x] External Fields

Sloted for v0.1.1:

- [ ] Product Details
- [ ] Transaction History
- [ ] Payment History
- [ ] Statements
- [ ] Customer Details
