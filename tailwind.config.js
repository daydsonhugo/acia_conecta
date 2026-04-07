/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        conecta: {
          50: "#eef8f2",
          100: "#d7efdf",
          200: "#b6dfc4",
          300: "#87caa0",
          400: "#46ac73",
          500: "#0d8b59",
          600: "#026c3e",
          700: "#035333",
          800: "#0a3625",
          900: "#06140f"
        },
        sand: "#f3f1ea",
        ink: "#15221c"
      },
      fontFamily: {
        display: ["Sora", "sans-serif"],
        sans: ["Manrope", "sans-serif"]
      },
      boxShadow: {
        soft: "0 20px 60px rgba(6, 20, 15, 0.10)",
        panel: "0 18px 40px rgba(6, 20, 15, 0.08)"
      },
      backgroundImage: {
        glow: "radial-gradient(circle at top left, rgba(13, 139, 89, 0.24), transparent 34%), radial-gradient(circle at bottom right, rgba(182, 223, 196, 0.28), transparent 32%)"
      }
    }
  },
  plugins: []
};
