/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./<custom directory>/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "heading-one": [
          '20px',
          {
            lineHeight: "1.4",
            letterSpacing: "0",
            fontWeight: "600"
          }
        ],
        "description": [
          '14px',
          {
            lineHeight: "1.4",
            letterSpacing: "",
            fontWeight: "400"
          }
        ],
        "placeholder": [
          '14px',
          {
            lineHeight: "22",
            letterSpacing: "",
            fontWeight: "400"
          }
        ],
        "cart": [
          '14px',
          {
            lineHeight: "1.2",
            letterSpacing: "",
            fontWeight: "500"
          }
        ],
        'small-text': [
          '12px',
          {
            lineHeight: "1.4",
            letterSpacing: "",
            fontWeight: "400"
          }
        ],
        'badge-text': [
          '14px',
          {
            lineHeight: "16",
            letterSpacing: "",
            fontWeight: "500"
          }
        ],
      },
      colors:
      {
        primary: "#666437",
        primary_light: "#EFE8DF",
        white: "#FFF",
        dark: "#201B19"
      }


    },
  },
  plugins: [],
  presets: [require("nativewind/preset")],
}

