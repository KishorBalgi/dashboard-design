/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-light": "#F2F2F2",
        secondary: "#1E2640",
        primary: "#146EB4",
      },
    },
  },
  plugins: [],
};
