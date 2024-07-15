/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      height: {
        18: "75px",
        128: "32rem",
        144: "70rem",
      },
      maxHeight: {
        75: "300px",
      },
      minWidth: {
        18: "75px",
        40: "303.8px"
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        93: "347px",
      },
      padding: {
        0.7: "3px",
      },
      margin: {
        0.7: "3px",
      },
      colors: {
        customGray: "#383f48",
        textGray: "#747373",
        textGray0: "#A1A1A1",
        dimPrimaryColor: "#bce0fb",
        primaryColor: "#0f8be8",
        borderColor: " #0000001A",
      },
      inset: {
        "-29": "-113px",
        18: "94px",
      },
    },
    keyframes: {
      expandHeight: {
        "0%": { maxHeight: "0px", opacity: "0" },
        "100%": { maxHeight: "180px", opacity: "1" },
      },
    },
    animation: {
      expandHeight:
        "expandHeight 0.4s cubic-bezier(0.000, 0.000, 0.580, 1.000) forwards",
    },
  },
  plugins: [require("flowbite/plugin")],
};
