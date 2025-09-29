module.exports = {
  root: true,
//   typescript-eslint-parser: TypeScriptはJavaScriptの拡張構文なので、TSパーサーだけで両方リントできる
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
  },
  ignorePatterns: ["dist"],
//   extends: [
//     "airbnb-base",
//     "airbnb-typescript/base",
//     "plugin:@typescript-eslint/recommended-requiring-type-checking",
//   ],
//   rules: {
//     "import/prefer-default-export": "off",
//     "@typescript-eslint/quotes": ["error", "double"],
//   },
};
