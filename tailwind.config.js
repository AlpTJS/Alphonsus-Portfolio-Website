/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#EAE8E4",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
      
        xs: "455px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
        "flower-pattern": "url('/src/assets/flower.jpeg')",
        "paint-pattern":"url('/src/assets/timeline.jpg')",
        "texture-pattern":"url('/src/assets/texture.jpg')",
        "dark-pattern":"url('/src/assets/dark.jpg')",
        "chalk-pattern":"url('/src/assets/chalk.jpg')",
        "light-pattern":"url('/src/assets/light.jpg')",
      },
    },
  },
  plugins: [],
};
