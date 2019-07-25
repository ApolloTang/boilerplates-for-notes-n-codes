module.exports = {
    "parser": "babel-eslint",
    "env": {
        "browser": true,
        "node": true, // https://stackoverflow.com/questions/49789177/module-is-not-defined-and-process-is-not-defined-in-eslint-in-visual-studio-code
        "es6": true
    },
    "extends": "eslint:recommended",
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
        "react-hooks"
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-uses-react": "error", // https://github.com/eslint/eslint/issues/11183
        "react/jsx-uses-vars": ["error"] // https://github.com/eslint/eslint/issues/8226
    }
};
