module.exports = {
    "parser": "@typescript-eslint/parser",
    "env": {
        "browser": true,
        "node": true, // https://stackoverflow.com/questions/49789177/module-is-not-defined-and-process-is-not-defined-in-eslint-in-visual-studio-code
        "es6": true
    },
    "extends": [
      "eslint:recommended",
      // "airbnb"

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

    ],
    "rules": {
      "react-hooks/rules-of-hooks": "error",
      "react/jsx-uses-react": "error", // https://github.com/eslint/eslint/issues/11183
      "react/jsx-uses-vars": ["error"], // https://github.com/eslint/eslint/issues/8226

      "semi": ["error", "never"],
      "quotes": [1, "single"],
      "indent": ["off", 2],
      "no-unused-vars": 1
    },
    "overrides": [
      {
        "files": ["**/*.ts", "**/*.tsx"],
        "parser": "@typescript-eslint/parser",
        "rules": {
          "no-undef": "off" // https://github.com/eslint/typescript-eslint-parser/issues/437
        }
      }
    ]
};
