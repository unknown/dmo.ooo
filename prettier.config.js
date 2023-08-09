/** @typedef  {import("prettier").Config} PrettierConfig*/

/** @type { PrettierConfig } */
const config = {
  printWidth: 100,
  singleQuote: false,
  tabWidth: 2,
  semi: true,
  trailingComma: "all",
  plugins: ["prettier-plugin-tailwindcss"],
};

module.exports = config;
