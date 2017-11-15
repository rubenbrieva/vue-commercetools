module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    es6: true,
    jasmine: true
  },
  extends: "airbnb-base",
  plugins: ["html", "jasmine"],
  rules: {
    "import/extensions": [
      "error",
      "always",
      {
        js: "never"
      }
    ],
    "no-unused-vars": "warn",
    "no-console": "off",
    "arrow-body-style": "off",
    indent: "warn",
    "consistent-return": "off",
    "no-else-return": "off",
    "global-require": "off",
    "no-param-reassign": ["error", { props: false }],
    "new-cap": "off",
    "arrow-parens": "off"
  }
};
