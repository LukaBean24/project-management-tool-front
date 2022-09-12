/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#222831",
        main: "#FD7014",
        whit: "#EEEEEE",
        secondary: "#393E46",
        success: "#66D875",
        warning: "#FFD037",
        error: "#F24F52",
      },
    },
  },
  plugins: [],
};
