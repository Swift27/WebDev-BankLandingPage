/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      xs: ["12px", "16px"],
      sm: ["14px", "20px"],
      base: ["16px", "19.5px"],
      lg: ["18px", "21.94px"],
      xl: ["20px", "24.38px"],
      "2xl": ["24px", "29.26px"],
      "3xl": ["36px", "48px"],
      "4xl": ["48px", "58px"],
      "5xl": ["60px", "80px"],
      "6xl": ["72px", "96px"],
      "8xl": ["96px", "106px"],
    },
    extend: {
      fontFamily: {
        publicSans: ["Public Sans", "sans-serif"],
      },
      colors: {
        "dark-blue": "hsl(233, 26%, 24%)",
        "lime-green": "hsl(136, 65%, 51%)",
        "bright-cyan": "hsl(192, 70%, 51%)",
        "grayish-blue": "hsl(233, 8%, 62%)",
        "light-grayish-blue": "hsl(220, 16%, 96%)",
        "very-light-gray": "hsl(0, 0%, 98%)",
        white: "hsl(0, 0%, 100%)",
      },
      keyframes: {
        "scale-up-ver-top": {
          "0%": {
            transform: "scaleY(0)",
            transformOrigin: "top",
          },
          "100%": {
            transform: "scaleY(1)",
            transformOrigin: "top",
          },
        },
        "scale-down-ver-top": {
          "0%": {
            transform: "scaleY(1)",
            transformOrigin: "top",
          },
          "100%": {
            transform: "scaleY(0)",
            transformOrigin: "top",
          },
        },
      },
      animation: {
        "scale-up-ver-top": "scale-up-ver-top 0.4s ease-in",
        "scale-down-ver-top": "scale-down-ver-top 0.4s ease-out",
      },
    },
  },
  plugins: [],
};
