module.exports = {
  "parser": "babel-eslint",
  "extends": [
    "airbnb",
    "plugin:flowtype/recommended"
  ],
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    "arrow-parens": ["off"],
    "compat/compat": "error",
    "consistent-return": "off",
    "comma-dangle": "off",
    "generator-star-spacing": "off",
    "import/no-unresolved": "error",
    "import/no-extraneous-dependencies": "off",
    "no-console": "off",
    "no-use-before-define": "off",
    "no-multi-assign": "off",
    "promise/param-names": "error",
    "promise/always-return": "error",
    "promise/catch-or-return": "error",
    "promise/no-native": "off",
    "react/jsx-no-bind": "off",
    "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": "off",
    "flowtype-errors/show-errors": 2,
  },
  "plugins": [
    "flowtype",
    "flowtype-errors",
    "import",
    "promise",
    "compat",
    "react"
  ]
}
