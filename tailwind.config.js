/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        18: "75px",
        128: "32rem",
        144: "70rem",
      },
      minWidth: {
        18: "75px",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        93: "347px",
      },
      colors: {
        primary: "rgb(59 130 246)",
        primaryHover: "rgb(59 130 246 / 90%)",
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

    screens: {
      'ssm': '445px',
      'tm': '525px',
      //
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
};
