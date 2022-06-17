const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant(
        "supports-backdrop-blur",
        "@supports (backdrop-filter: blur(4px))"
      );
    }),
  ],
};
