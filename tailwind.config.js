/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "rotate-y": "rotateY 10s infinite linear",
      },
      keyframes: {
        rotateY: {
          "0%": { transform: "rotateY(0deg)" },
          "100%": { transform: "rotateY(360deg)" },
        },
      },
      inset: {
        "-2": "-0.5rem",
        "-4": "-1rem",
        "-6": "-1.5rem",
        "-8": "-2rem",
        "-10": "-2.5rem",
        "-12": "-3rem",
        "-14": "-3.5rem",
        "-16": "-4rem",
        "-20": "-5rem",
        "-24": "-6rem",
        "-32": "-8rem",
        "-40": "-10rem",
        "-48": "-12rem",
        "-56": "-14rem",
        "-64": "-16rem",
        "-72": "-18rem",
        "-80": "-20rem",
      },
      width: {
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
        192: "48rem",
        200: "52rem", // 768px
        256: "64rem", // 1024px
        // Ajoutez autant de tailles que vous le souhaitez
      },
      height: {
        128: "32rem", // 512px
        144: "36rem", // 576px
        160: "40rem", // 640px
        192: "48rem",
        200: "52rem", // 768px
        256: "64rem", // 1024px
        // Ajoutez autant de tailles que vous le souhaitez
      },
      borderWidth: {
        1: "1px",
      },
      keyframes: {
        "border-animate": {
          "0%, 100%": { "background-position": "0% 0%" },
          "25%": { "background-position": "100% 0%" },
          "50%": { "background-position": "100% 100%" },
          "75%": { "background-position": "0% 100%" },
        },
      },

      backgroundImage: (theme) => ({
        "gradient-custom": "linear-gradient(45deg, var(--tw-gradient-stops))",
      }),
    },
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
      source: ["Source Code Pro", "monospace"],
      raleway: ["Raleway", "sans-serif"],
      barlow: ["Barlow", "sans-serif"],
    },
  },
  plugins: [],
};
