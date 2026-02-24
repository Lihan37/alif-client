export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#ECD9BA",
          light: "#F6EEDD",
          dark: "#CBB890",
        },
        text: {
          primary: "#2E2A25",
          secondary: "#5F5A52",
          muted: "#8B857C",
          inverse: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#B89B5E",
          hover: "#A6874D",
        },
        surface: {
          main: "#FFFFFF",
          section: "#F6EEDD",
          card: "#FFFFFF",
          footer: "#2E2A25",
        },
        status: {
          success: "#4F7D63",
          warning: "#C48A3A",
          error: "#B5483A",
          info: "#5A6D7C",
        },
      },
    },
  },
};
