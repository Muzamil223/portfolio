export const content = ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"];
export const theme = {
  extend: {
    animation: {
      "slide-top": "slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both",
    },
    keyframes: {
      "slide-top": {
        "0%": { transform: "translateY(100%)" },
        "100%": { transform: "translateY(0)" },
      },
    },
    screens: {
      xs: "480px",
      ss: "580px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
};
export const plugins = [];
