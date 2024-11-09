/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      screens: {
        sm: "550px",
      },
      gridTemplateRows: {
        row: "auto 1fr auto",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        Red: "var(--Red)",
      },

      backgroundImage: {
        texture: "https://www.transparenttextures.com/patterns/circles.png",
      },
      height: {
        vh: "100vh",
        600: "600px",
      },
      borderRadius: {
        half: "50%",
      },
      width: {
        half: "500px",
      },
      maxWidth: {
        300: "300px",
        270: "270px",
      },
      minWidth: {
        half: "500px",
      },

      fontSize: {
        header: "50px",
      },
      fontFamily: {
        rubik: ["Rubik", "serif"],
        roboto: ["Roboto", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        half: "repeat(4, minmax(0,0.5fr))",
      },
      zIndex: {
        1: "1",
      },
    },
  },
  plugins: [],
};
