/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
      extend: {
        colors: {
          green: {
            300: "#33ff33",
            400: "#00ff00",
          },
        },
      },
    },
    plugins: [],
  };
  