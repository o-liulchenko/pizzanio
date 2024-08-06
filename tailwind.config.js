import plugin from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      title: ["Anton", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
    },
    extend: {
      gridTemplateRows: {
        layout: "auto 1fr auto",
      },
      keyframes: {
        waterflow: {
          '0%': {transform: 'scaleY(-5%)', opacity: '0'},
          '100%': {transform: 'scaleY(-5%)', opacity: '1'},
        }
      },
      animation: {
        waterflow: 'waterflow 150ms ease-in-out'
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".container": {
          width: "clamp(375px, 100%, 1440px)",
          margin: "0 auto",
        },
        ".container-full": {
          width: "clamp(375px, 100%, 1920px)",
          margin: "0 auto",
        },
      });
    },
  ],
};
