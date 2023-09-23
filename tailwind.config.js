/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        purple: "#d434fe",
        darkPurple: "#903AFF",
        dark: "#150E28",
        veryDark: "#100B20",
        lightTransparentPurple: "rgba(212, 52, 254, 0.12)",
        darkTransparentPurple: "rgba(144, 58, 255, 0.12)",
        grayishWhite: "rgba(255, 255, 255, 0.75)",
        nearlyTransparentWhite: "rgba(255, 255, 255, 0.03)",
        nearlyTransparentBlack: "rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
