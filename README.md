# CanopyUI

CanopyUI is a library of WebComponents you can use regardless of your tech stack. See the usage
guide below.

![CanopyUI](https://user-images.githubusercontent.com/1096881/110418148-98923f80-805c-11eb-9c70-0654ed0eae00.png)

## Usage

```
# install
yarn add `@canopyinc/canopy-ui`

# import then bundle with your other JS
import "@canopyinc/canopy-ui"
```

Then once the JS is loaded you can start writing HTML with CanopyUI's web components.

```html
<cui-account-overview
  amount: 349392,
  credit_limit: 800000,
  available_credit: 450608,
  pending_charges: 0,
  promo_exp: "10/15/2021"
>
</cui-account-overview>
```

## Styling

To theme CanopyUI components with a custom CSS property, pass a supported variable to the selector
on the target web component. All variables are prefixed with `--cui-`.

```html
<style>
  cui-account-overview {
    --cui-color-primary: darkblue;
  }
</style>
<cui-account-overview
  amount="349392"
  credit-limit="800000"
  available-credit="450608"
  pending-charges="0"
  promo-exp="10/15/2021"
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
