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
      "plugin:jest/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended",
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
      "semi": [1, "never"],
      "quotes": ["warn", "single"],
      "indent": ["off", 2],
      "no-unused-vars": "warn",

      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-function-return-type": "off", // without this you will get incosistence behaviour compare to barebone @typescript-eslint
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/member-delimiter-style": ["warn", {
        "multiline":{"delimiter":"none","requireLast":true}, "singleline":{"delimiter":"semi","requireLast":false} // single line config is not working
      }],
      "@typescript-eslint/type-annotation-spacing": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/class-name-casing": ["off", {
        "allowUnderscorePrefix":true
      }],
      "@typescript-eslint/ban-ts-ignore": "off",

      "react-hooks/rules-of-hooks": "error",
      "react/jsx-uses-react": "error",        // https://github.com/eslint/eslint/issues/11183
      "react/jsx-uses-vars": ["error"],       // https://github.com/eslint/eslint/issues/8226

      // "emotion/jsx-import": "error",       // not needed because we are using babel plugin
      // "emotion/no-vanilla": "error",       // not needed because we are using react
      "emotion/import-from-emotion": "error",
      "emotion/styled-import": "error",
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
