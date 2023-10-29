/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "0.5rem",
          sm: "0.5rem",
          md: "0.5rem",
          lg: "4rem",
          xl: "7rem",
        },
      },
    },
  },
  plugins: [],
};
