const error = "error";
const warn = process.argv.includes("--report-unused-disable-directives")
  ? "error"
  : "warn";

module.exports = {
  plugins: [
    "@typescript-eslint",
    "import",
    "react-hooks",
    "react",
    "simple-import-sort",
  ],
  reportUnusedDisableDirectives: true,
  env: {
    es2020: true,
    node: true,
  },
  rules: {
    "arrow-body-style": warn,
    "default-case-last": warn,
    "for-direction": error,
    "no-caller": error,
    "no-case-declarations": error,
    "no-compare-neg-zero": error,
    "no-constant-condition": error,
    "no-debugger": warn,
    "no-dupe-else-if": error,
    "no-duplicate-case": error,
    "no-empty-character-class": warn,
    "no-empty-pattern": warn,
    "no-empty": warn,
    "no-eval": error,
    "no-invalid-regexp": error,
    "no-labels": error,
    "no-misleading-character-class": error,
    "no-nonoctal-decimal-escape": error,
    "no-octal-escape": error,
    "no-param-reassign": error,
    "no-promise-executor-return": error,
    "no-prototype-builtins": error,
    "no-regex-spaces": error,
    "no-restricted-syntax": [
      error,
      {
        selector: "SequenceExpression",
        message:
          "The comma operator is confusing and a common mistake. Don’t use it!",
      },
    ],
    "no-self-compare": error,
    "no-sparse-arrays": error,
    "no-template-curly-in-string": error,
    "no-unmodified-loop-condition": error,
    "no-unneeded-ternary": warn,
    "no-unsafe-finally": error,
    "no-useless-backreference": error,
    "no-useless-catch": error,
    "no-useless-computed-key": warn,
    "no-useless-concat": warn,
    "no-useless-constructor": warn,
    "no-useless-escape": error,
    "no-useless-rename": warn,
    "no-var": error,
    "object-shorthand": warn,
    "prefer-arrow-callback": warn,
    "prefer-const": warn,
    "prefer-destructuring": [warn, { object: true, array: false }],
    "prefer-exponentiation-operator": warn,
    "prefer-numeric-literals": warn,
    "prefer-object-spread": warn,
    "prefer-promise-reject-errors": error,
    "prefer-regex-literals": warn,
    "prefer-rest-params": warn,
    "prefer-spread": warn,
    "prefer-template": warn,
    "simple-import-sort/exports": warn,
    "simple-import-sort/imports": warn,
    "use-isnan": error,
    curly: warn,
    eqeqeq: [warn, "always", { null: "ignore" }],
    yoda: warn,
    "import/no-cycle": error,
    "import/extensions": [warn, { ts: "never", config: "always" }],
    "import/first": warn,
    "import/newline-after-import": warn,
    "import/no-duplicates": warn,
    "import/no-extraneous-dependencies": error,
    "import/no-mutable-exports": error,
    "import/no-restricted-paths": [
      error,
      {
        basePath: "src",
        // Disallow these dirs from importing from each other.
        zones: makeRestrictedPathsZones([
          "background",
          "options",
          "popup",
          "renderer",
          "worker",
        ]),
      },
    ],
    "import/no-unused-modules": [error, { unusedExports: true }],
    "import/no-useless-path-segments": warn,
    "react-hooks/exhaustive-deps": error,
    "react-hooks/rules-of-hooks": error,
    "react/button-has-type": error,
    "react/jsx-boolean-value": warn,
    "react/jsx-fragments": warn,
    "react/jsx-key": [error, { checkFragmentShorthand: true }],
    "react/jsx-no-comment-textnodes": error,
    "react/jsx-no-target-blank": error,
    "react/jsx-no-useless-fragment": warn,
    "react/no-danger": error,
    "react/no-direct-mutation-state": error,
    "react/no-unescaped-entities": error,
    "react/no-unused-state": error,
    "react/self-closing-comp": warn,
  },
  overrides: [
    {
      files: "*.ts",
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.json"],
      },
      rules: {
        "@typescript-eslint/adjacent-overload-signatures": warn,
        "@typescript-eslint/array-type": [warn, { default: "generic" }],
        "@typescript-eslint/await-thenable": error,
        "@typescript-eslint/ban-ts-comment": error,
        "@typescript-eslint/ban-types": error,
        "@typescript-eslint/consistent-type-assertions": [
          error,
          {
            assertionStyle: "as",
            objectLiteralTypeAssertions: "never",
          },
        ],
        "@typescript-eslint/consistent-type-definitions": [warn, "type"],
        "@typescript-eslint/default-param-last": warn,
        "@typescript-eslint/dot-notation": warn,
        "@typescript-eslint/explicit-function-return-type": [
          warn,
          { allowExpressions: true },
        ],
        "@typescript-eslint/lines-between-class-members": warn,
        "@typescript-eslint/method-signature-style": warn,
        "@typescript-eslint/no-array-constructor": warn,
        "@typescript-eslint/no-base-to-string": error,
        "@typescript-eslint/no-confusing-void-expression": error,
        "@typescript-eslint/no-dupe-class-members": error,
        "@typescript-eslint/no-duplicate-imports": warn,
        "@typescript-eslint/no-empty-function": warn,
        "@typescript-eslint/no-empty-interface": warn,
        "@typescript-eslint/no-explicit-any": warn,
        // "@typescript-eslint/no-floating-promises": error,
        "@typescript-eslint/no-for-in-array": warn,
        "@typescript-eslint/no-implied-eval": error,
        "@typescript-eslint/no-inferrable-types": [
          warn,
          { ignoreParameters: true },
        ],
        "@typescript-eslint/no-invalid-this": error,
        "@typescript-eslint/no-invalid-void-type": error,
        "@typescript-eslint/no-loop-func": error,
        "@typescript-eslint/no-loss-of-precision": error,
        "@typescript-eslint/no-misused-promises": error,
        "@typescript-eslint/no-namespace": error,
        "@typescript-eslint/no-non-null-assertion": error,
        "@typescript-eslint/no-require-imports": error,
        "@typescript-eslint/no-shadow": error,
        "@typescript-eslint/no-this-alias": warn,
        "@typescript-eslint/no-throw-literal": error,
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": warn,
        "@typescript-eslint/no-unnecessary-type-arguments": warn,
        "@typescript-eslint/no-unnecessary-type-assertion": warn,
        "@typescript-eslint/no-unnecessary-type-constraint": error,
        "@typescript-eslint/no-unsafe-argument": error,
        "@typescript-eslint/no-unsafe-assignment": error,
        "@typescript-eslint/no-unsafe-call": error,
        "@typescript-eslint/no-unsafe-member-access": error,
        "@typescript-eslint/no-unsafe-return": error,
        "@typescript-eslint/no-unused-expressions": error,
        "@typescript-eslint/no-var-requires": error,
        "@typescript-eslint/prefer-as-const": warn,
        "@typescript-eslint/prefer-for-of": warn,
        "@typescript-eslint/prefer-function-type": warn,
        "@typescript-eslint/prefer-includes": warn,
        "@typescript-eslint/prefer-nullish-coalescing": warn,
        "@typescript-eslint/prefer-optional-chain": warn,
        "@typescript-eslint/prefer-reduce-type-parameter": warn,
        "@typescript-eslint/prefer-regexp-exec": warn,
        "@typescript-eslint/prefer-string-starts-ends-with": warn,
        "@typescript-eslint/promise-function-async": [
          error,
          { checkArrowFunctions: false },
        ],
        "@typescript-eslint/require-await": error,
        "@typescript-eslint/restrict-plus-operands": error,
        "@typescript-eslint/restrict-template-expressions": error,
        "@typescript-eslint/return-await": error,
        "@typescript-eslint/sort-type-union-intersection-members": warn,
        "@typescript-eslint/strict-boolean-expressions": [
          error,
          {
            allowString: false,
            allowNumber: false,
            allowNullableObject: false,
          },
        ],
        "@typescript-eslint/switch-exhaustiveness-check": error,
        "@typescript-eslint/triple-slash-reference": warn,
        // "@typescript-eslint/unbound-method": error,
        "@typescript-eslint/unified-signatures": warn,
      },
    },
    {
      files: ["src/*/**/*.ts"],
      env: {
        es2020: true,
        node: false,
      },
      // globals: {
      //   ...baseRules.browserEnv(),
      //   BROWSER: false,
      //   browser: false,
      //   BUILD_ID: false,
      //   COLOR_BADGE: false,
      //   COLOR_GREEN: false,
      //   COLOR_PURPLE: false,
      //   COLOR_YELLOW: false,
      //   DEFAULT_LOG_LEVEL_CONFIG: false,
      //   DEFAULT_STORAGE_SYNC: false,
      //   exportFunction: false,
      //   META_HOMEPAGE: false,
      //   META_ICON: false,
      //   META_NAME: false,
      //   META_SLUG: false,
      //   META_TUTORIAL: false,
      //   META_VERSION: false,
      //   navigator: false,
      //   PROD: false,
      //   XPCNativeWrapper: false,
      // },
      rules: {
        "no-console": warn,
      },
    },
    {
      files: ["*.es5.js"],
      parserOptions: { ecmaVersion: 5 },
      env: {
        es6: false,
        node: false,
        // browser: true,
      },
      // globals: baseRules.browserEnv(),
      rules: {
        "no-var": "off",
        "object-shorthand": "off",
        "prefer-arrow-callback": "off",
        "prefer-const": "off",
        "prefer-destructuring": "off",
        "prefer-exponentiation-operator": "off",
        "prefer-numeric-literals": "off",
        "prefer-object-spread": "off",
        "prefer-promise-reject-errors": "off",
        "prefer-regex-literals": "off",
        "prefer-rest-params": "off",
        "prefer-spread": "off",
        "prefer-template": "off",
      },
    },
    {
      files: ["html/**/*.js"],
      env: {
        es2020: true,
        node: false,
      },
      // globals: baseRules.browserEnv(),
      // rules: {
      //   "flowtype/require-parameter-type": "off",
      // },
    },
    {
      files: ["rollup.config.js"],
      parserOptions: {
        sourceType: "module",
      },
    },
  ],
  settings: {
    react: {
      version: "16.10",
    },
  },
};

function makeRestrictedPathsZones(dirs) {
  return [].concat(
    ...dirs.map((dir) => {
      const otherDirs = dirs.filter((dir2) => dir2 !== dir);
      return otherDirs.map((dir2) => ({ target: dir, from: dir2 }));
    }),
    ...dirs.map((dir) => ({ target: "shared", from: dir }))
  );
}
