/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kaushan: ["Kaushan Script", "cursive"],
        gelasio: ["Gelasio", "serif"],
        outfit: ["Outfit", "serif"],
      },
    },
  },
  plugins: [],
};
