module.exports = {
    "env": {
      "browser": true,
      "es2021": true
    },
    "extends": [
      "plugin:react/recommended",
      "airbnb",
      "plugin:@typescript-eslint/recommended",
      "prettier",
      "plugin:prettier/recommended"
    ],
    "parserOptions": {
      "ecmaFeatures": {
        "jsx": true
      },
      "ecmaVersion": 12,
      "sourceType": "module"
    },
    "plugins": ["react", "@typescript-eslint", "react-hooks", "prettier"],
    "rules": {
      "@typescript-eslint/no-empty-function": "off",
      "prettier/prettier": "error",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "no-nested-ternary": "off",
      "func-names": "off",
      "react/jsx-curly-newline": "off",
      "array-callback-return": "off",
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-non-null-assertion": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-wrap-multilines": "off",
      "react/jsx-props-no-spreading": "off",
      "react/prop-types": "off",
      "react/jsx-indent": "off",
      "jsx-a11y/label-has-associated-control": "off",
      "no-param-reassign": "off",
      "react/no-unused-prop-types": "off",
      "no-console": "off",
      "react/require-default-props": "off",
      "react/no-array-index-key": "off",
      "react/jsx-filename-extension": [
        1,
        {
          "extensions": [".tsx"]
        }
      ],
      "jsx-a11y/click-events-have-key-events": "off",
      "jsx-a11y/no-static-element-interactions": "off",
      "import/prefer-default-export": "off",
      "camelcase": "off",
      "@typescript-eslint/ban-types": "off",
      "react/destructuring-assignment": "off",
      "react/jsx-no-bind": "warn",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "ts": "never",
          "tsx": "never"
        }
      ],
      "no-use-before-define": "off"
    },

    "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"],
          "moduleDirectory": ["node_modules", "src/"]
        },
        "typescript": {}
      }
    }
  };
