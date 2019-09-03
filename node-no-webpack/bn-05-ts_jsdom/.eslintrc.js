module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "node": true, // https://stackoverflow.com/questions/49789177/module-is-not-defined-and-process-is-not-defined-in-eslint-in-visual-studio-code
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      // "airbnb",
      "plugin:jest/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
      "react",
      "react-hooks",
      "@typescript-eslint",
      "emotion"
    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react/jsx-uses-react": "error",        // https://github.com/eslint/eslint/issues/11183
      "react/jsx-uses-vars": ["error"],       // https://github.com/eslint/eslint/issues/8226

      // "emotion/jsx-import": "error",       // not need because we are using babel plugin
      // "emotion/no-vanilla": "error",       // not need because we are using react
      "emotion/import-from-emotion": "error",
      "emotion/styled-import": "error",

      "semi": ["error", "never"],
      "quotes": [1, "single"],
      "indent": ["off", 2],
      "no-unused-vars": 1
    }
};