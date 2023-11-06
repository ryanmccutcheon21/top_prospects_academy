import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        black: "#000",
        primary1: "#ffad19",
        white: "#fff",
        primary2: "#c2c2c2",
        orange: "rgba(255, 173, 25, 0.5)",
        gainsboro: "#d9d9d9",
        darkslategray: "#404040",
        dimgray: {
          "100": "#737171",
          "200": "#505050",
        },
        gray: "#929292",
      },
      spacing: {},
      fontFamily: {
        "button-text": "'Open Sans'",
        "lead-text": "Oswald",
        "bebas-neue": "'Bebas Neue'",
        "inter": "Inter",
        "playfair-display": "'Playfair Display'",
      },
    },
    fontSize: {
      "5xl": "24px",
      xs: "12px",
      "29xl": "48px",
      base: "16px",
      xl: "20px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      md: {
        max: "960px",
      },
    },
  },
  plugins: [],
}
export default config
