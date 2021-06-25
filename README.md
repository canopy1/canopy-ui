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

Storybook will reload any changes you make.

## Usage

```
# install
yarn add `@canopyinc/canopy-ui`

# import then bundle with your other JS
import "@canopyinc/canopy-ui"
```

Then once the JS is loaded you can start writing HTML with CanopyUI's web components.

```
<cnpy-payment-details 
    amount="349392"
    credit-limit="800000"
    available-credit="450608"
    pending-charges="0"
    promo-exp="10/15/2021"
>
</cnpy-payment-details>
```

The following is similar but more flexible because you can add/remove <cnpy-stat> components and
control their order.

```
<cnpy-payment-details>
    <div slot="top">
        <cnpy-stat label="Amount" value="349392" currency=true></cnpy-stat>
        <cnpy-stat label="Available Credit" value="450608" currency=true></cnpy-stat>
    </div>
    <div slot="bottom">
        <cnpy-stat-sm label="Credit Limit" value="800000" currency=true></cnpy-stat>
        <cnpy-stat-sm label="Pending Charges" value="0" currency=true></cnpy-stat>
        <cnpy-stat-sm label="Promo Period Expiration" value="10/15/2021"></cnpy-stat>
    </div>
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
