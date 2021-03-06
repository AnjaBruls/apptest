module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/all"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "react/display-name": [0],
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "react/no-multi-comp": [2, { "ignoreStateless": true }],
        "react/no-set-state": [0],
        "react/jsx-sort-props": [0],
        "react/sort-prop-types": [0],
        "react/jsx-max-depth": [2, {max: 8}],
        "react/forbid-component-props": [0],
        "react/jsx-max-props-per-line": [0]
    }
};