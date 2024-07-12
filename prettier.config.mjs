/** @type {import("prettier").Config} */
const config = {
  printWidth: 100,
  singleQuote: false,
  tabWidth: 2,
  semi: true,
  trailingComma: "all",
  plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
