# CanopyUI

CanopyUI is a library of WebComponents you can use regardless of your tech stack. See the usage
guide below.

![CanopyUI](https://user-images.githubusercontent.com/1096881/110418148-98923f80-805c-11eb-9c70-0654ed0eae00.png)

## Setup

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

## Usage

```
# install
yarn add `@canopyinc/canopy-ui`

# import then bundle with your other JS
import "@canopyinc/canopy-ui"
```

Then once the JS is loaded you can start writing HTML with CanopyUI's web components.

```html
<cnpy-payment-details 
    amount="349392"
    credit-limit="800000"
    available-credit="450608"
    pending-charges="0"
    promo-exp="10/15/2021"
>
</cnpy-payment-details>
```

## Styling

To theme CanopyUI components with a custom CSS property, pass a supported variable to the selector
on the target web component. All variables are prefixed with `--cui`.

```html
<style>
    cnpy-payment-details {
        --cui-color-primary: darkblue;
    }
</style>
<cnpy-payment-details 
    amount="349392"
    credit-limit="800000"
    available-credit="450608"
    pending-charges="0"
    promo-exp="10/15/2021"
>
</cnpy-payment-details>
```

## Component Support

As of 0.1.0:

- [x] Payment Details
- [ ] Account Overview
- [ ] Product Details
- [ ] Transaction History
- [ ] Payment History
- [ ] Statements
- [ ] Customer Details
- [ ] Amortization Schedule
