const config = {
  mode: "jit",
  purge: [
    "./src/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    extend: {
      colors: {
        cody: "#f1ff59"
      }
    },
  },
  plugins: [],
};
module.exports = config;
