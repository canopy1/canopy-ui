# CanopyUI

CanopyUI is a library of WebComponents you can use regardless of your tech stack. Our public
Storybook preview is hosted on Github Pages at https://canopy1.github.io/canopy-ui/. You can walk
through our Storybook to see what properties are supported and experiment with dynamic properties
yourself.

![CanopyUI](https://user-images.githubusercontent.com/1096881/110418148-98923f80-805c-11eb-9c70-0654ed0eae00.png)

## Usage

You can load the JavaScript directly into the browser.
### Browser Setup

```html
<!-- Load JavaScript for CanopyUI -->
<body>
  ...
  <script src="https://unpkg.com/@canopyinc/ui@0.1.4/build/browser.min.js"></script>
</body>
```

Or include it via a module bundler such as Webpack or Rollup.
### Node Setup

```bash
# with npm
npm install @canopyinc/ui --save

# or yarn
yarn add @canopyinc/ui
```

```js
// index.js (or some entry point in your codebase)

import "@canopyinc/ui";
```

You will need to include the default CSS theme for CanopyUI as well. 
### CSS Setup

```html
<!-- Load default CSS for CanopyUI -->
<head>
  ...
  <link href="https://unpkg.com/@canopyinc/ui@0.1.4/public/variables.css" rel="stylesheet">
</head>
```

### Start Writing CanopyUI

Once the JS is loaded you can start writing CanopyUI web components.

```html
<div id="container"></div>

<script>
  const el = document.createElement("cui-account-overview");
  const accountDetails = {
    total_balance_cents: 349391,
    credit_limit_cents: 800000,
    available_credit_cents: 450608,
    pending_charges: 0,
    promo_exclusive_end: "10/15/2021"
  };
  el.setAttribute("details", JSON.stringify(accountDetails));
  document.getElementById("container").appendChild(el);
</script>
```

Since CanopyUI is built from the WebComponents set of standards you may also write HTML markup
directly.

```html
<!-- NOTE: All properties should be passed as strings (including objects and arrays.) -->
<cui-account-overview details="..."></cui-account-overview>
```

## Components

## Available Components

| Component                   | Status | Doc |
| --------------------------- | ------ | ---- |
| `<cui-account-overview>`    | v0.1.0 | [link](https://canopy1.github.io/canopy-ui/?path=/docs/components-accountoverview) | 
| `<cui-am-schedule>`         | v0.1.0 | [link](https://canopy1.github.io/canopy-ui/?path=/docs/components-amschedule) | 
| `<cui-external-fields>`     | v0.1.0 | [link](https://canopy1.github.io/canopy-ui/?path=/docs/components-externalfields) |
| `<cui-payment>`             | v0.1.0 | [link](https://canopy1.github.io/canopy-ui/?path=/docs/components-payment) |
| `<cui-customer-details>`    | TBD    | |
| `<cui-payment-history>`     | TBD    | |
| `<cui-product-details>`     | TBD    | |
| `<cui-statements>`          | TBD    | |
| `<cui-transaction-history>` | TBD    | |

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

<cui-account-overview details="..."></cui-account-overview>
```

## Local Development

```bash
# download the repo
git clone git@github.com:canopy1/canopy-ui.git

# install package dependencies
yarn install

# compile
yarn build

# run storybook server
yarn storybook
```

Storybook will reload any changes you make. You are able to change background colors in Storybook
for better contrast.
