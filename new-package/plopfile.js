/*
 * Plop File
 * -----------------------------------------------------------------------------------
 *
 * Plop is a micro generator, we use plop to generate a component boilerplate
 * when you run `yarn new-package` at the root of the project.
 *
 * The convenient thing about plop is that instead of having to remember a unique set of
 * command line arguments to generate code, you run one command `yarn new-package` and
 * this file will set the configuration for a set of questions and helpers to determine
 * the customization of each new package / component.
 */

// name prefix
const SCOPE = "@canopyinc"
const PREFIX = "ui-"

module.exports = function (plop) {
  plop.setWelcomeMessage("✨ CanopyUI Component Generator ✨")

  // name of custom element tag
  plop.setPartial("tagName", "ui-{{name}}")

  // name of custom element tag
  plop.setPartial("packageName", `${SCOPE}/${PREFIX}{{name}}`)

  // name of LitElement class
  plop.setHelper("className", function (name) {
    const camel = name.replace(/-([a-z])/g, (g) => {
      return g[1].toUpperCase()
    })
    camel[0] = camel[0].toUpperCase()
    const capitalized = camel.charAt(0).toUpperCase() + camel.substring(1)
    return capitalized
  })

  // name used as title in storybook and documentation
  plop.setHelper("displayName", function (name) {
    const camel = name.replace(/-([a-z])/g, (g) => {
      return ` ${g[1].toUpperCase()}`
    })
    camel[0] = camel[0].toUpperCase()
    const capitalized = camel.charAt(0).toUpperCase() + camel.substring(1)
    return capitalized
  })

  // name used as title in storybook and documentation
  plop.setHelper("sanitize", function (name) {
    const camel = name.replace(/-([a-z])/g, (g) => {
      return ` ${g[1].toUpperCase()}`
    })
    camel[0] = camel[0].toUpperCase()
    const capitalized = camel.charAt(0).toUpperCase() + camel.substring(1)
    return capitalized
  })

  plop.setGenerator("component", {
    description: "application controller logic",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "component name::",
        // ensure name does not start with ui-
        // and that its provided with some value
        validate: function (name) {
          if (name.trim() === "") {
            return "Please enter a component name"
          }
          if (name.startsWith("ui-")) {
            return "Please provide a name without the 'ui-' prefix."
          }
          return true
        },
      },
    ],
    actions: [
      {
        type: "add",
        path: "../packages/{{> tagName}}/src/index.ts",
        templateFile: "plop-templates/index.ts.hbs",
      },
      {
        type: "add",
        path: "../packages/{{> tagName}}/src/{{name}}.ts",
        templateFile: "plop-templates/component.ts.hbs",
      },
      {
        type: "add",
        path: "../packages/{{> tagName}}/{{> tagName}}.ts",
        templateFile: "plop-templates/component-registration.ts.hbs",
      },
      {
        type: "add",
        path: "../packages/{{> tagName}}/src/{{name}}.css.ts",
        templateFile: "plop-templates/component.css.ts.hbs",
      },
      {
        type: "add",
        path: "../packages/{{> tagName}}/test/{{name}}.test.ts",
        templateFile: "plop-templates/test.ts.hbs",
      },
      {
        type: "add",
        path: "../packages/{{> tagName}}/stories/{{name}}.stories.ts",
        templateFile: "plop-templates/stories.ts.hbs",
      },
      {
        type: "add",
        path: "../packages/{{> tagName}}/README.md",
        templateFile: "plop-templates/README.md.hbs",
      },
      {
        type: "add",
        path: "../packages/{{> tagName}}/tsconfig.json",
        templateFile: "plop-templates/tsconfig.json.hbs",
      },
      {
        type: "add",
        path: "../packages/{{> tagName}}/package.json",
        templateFile: "plop-templates/package.json.hbs",
      },
    ],
  })
}
