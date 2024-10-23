/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
        title: "Roboto",
      },
      backgroundImage: {
        pattern: "url('/bg.png')",
      },
      colors: {
        bege: "#E6AE8C",
        ciano: "#A8CECF",
      },
    },
  },
  plugins: [],
};
