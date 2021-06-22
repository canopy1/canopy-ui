# CanopyUI

<!--
 == CanopyUI Logo ========================================== -->

![CanopyUI](https://user-images.githubusercontent.com/1096881/110418148-98923f80-805c-11eb-9c70-0654ed0eae00.png)

<!--
 == Badges ================================================= -->

[![Build Status](https://img.shields.io/travis/gitpoint/git-point.svg?style=flat-square)](https://travis-ci.org/gitpoint/git-point)
[![Coveralls](https://img.shields.io/coveralls/github/gitpoint/git-point.svg?style=flat-square)](https://coveralls.io/github/gitpoint/git-point)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)

## What is CanopyUI?

CanopyUI is a set of custom [web-components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) that make building web apps ontop of the CanopyAPI simple and intuitive. It is designed to work with your existing web framework — or without any framework at all.

#### Native Web-Componenents

CanopyUI is built using the [Web Components Standards](https://developer.mozilla.org/en-US/docs/Web/Web_Components) which are a set of technologies that allow the building of custom HTML elements that behave much like the many elements native to the browser.

#### Light weight

CanopyUI Web Components are implemented using the [Lit](https://lit.dev/) base class. Lit is designed for creating web components with a minimum amount of overhead. <!-- LitElement is built into `@canopy-ui/core`, so there's no need to include it as a dependency. However, if you are already using Lit, and don't want a duplicate version, you can use CanopyUI without LitElement, and manually plug it in according to the documentation. -->

#### Framework agnostic

You can use our web components with any framework, because they’re supported and encapsulated at the browser level.

## Setup

### Dependencies

```
npm install -g yarn
```

### Scripts

```
# install package dependencies
yarn install

# compile typescript
yarn build

# run tests
yarn test

# todo:
# run a dev server
# yarn dev
# yarn storybook
```

The `dev` script will watch for changes, then recompile, and run tests anytime a file is changed.

## Getting Started

```sh
git clone https://github.com/canopy1/canopyUI.git
cd canopyUI
yarn
```

## Storybook

You can run Storybook through the command:

```sh
yarn storybook
```

By default the resulting site will be available at [http://localhost:8000](http://localhost:8000), but
the storybook command should launch a browser.

---

## Yarn

This project uses [Yarn2](https://yarnpkg.com/getting-started/) ([berry](https://github.com/yarnpkg/berry)<sup>[[1]](#berryFN)</sup>). Yarn2 introduces some new and unusual concepts that are worth noting. Here are some resources to better understand these changes:

Periodically, it's important to ensure you are using the latest

```
yarn version
```

<small><i>Footnotes</i></small>

> <small><a name="berryFN">[1]</a>: "Berry" is the codename for the Yarn 2 release line</small>

### Compatiblity

There are some compatability issues that arise once and a while, so if you run
into an issue, it might be helpful to check the [compatibility table](https://yarnpkg.com/features/pnp#compatibility-table).

### Editor Support

IDEs such as VSCode require special configuration for TypeScript to work with
Yarn2 Packages.

```
yarn pnpify --sdk vscode
```

You can visit the [Editor
SDKs](https://yarnpkg.com/getting-started/editor-sdks) to learn more.

# Development

## Create a new ui-element

```bash
# Yarn command
yarn new-package

# It will ask you what to call this ui-element
? component name::

# Input name for the new element (all lowercase, dashed, without the "ui-" prefix)
? component name:: element-name

# This will create several files for you
# ✔  ++ /Users/dave/code/canopyUI/packages/ui-element-name/src/index.ts
# ✔  ++ /Users/dave/code/canopyUI/packages/ui-element-name/src/element-name.ts
# ✔  ++ /Users/dave/code/canopyUI/packages/ui-element-name/ui-element-name.ts
# ✔  ++ /Users/dave/code/canopyUI/packages/ui-element-name/src/element-name.css.ts
# ✔  ++ /Users/dave/code/canopyUI/packages/ui-element-name/test/element-name.test.ts
# ✔  ++ /Users/dave/code/canopyUI/packages/ui-element-name/stories/element-name.stories.ts
# ✔  ++ /Users/dave/code/canopyUI/packages/ui-element-name/README.md
# ✔  ++ /Users/dave/code/canopyUI/packages/ui-element-name/tsconfig.json
# ✔  ++ /Users/dave/code/canopyUI/packages/ui-element-name/package.json
# ✨  Done in 4.16s.
```

### Shortcut

```
yarn new-package --name "select-box"
```

## Testing

### Unit Tests

Unit tests are run with Web Test Runner in Playwright using the Chai, Mocha and Sinon helper libraries. These tests can be executed with:

```
yarn test
```

During development you may wish to use `yarn test:watch` to automatically build
and re-run the test suites.
