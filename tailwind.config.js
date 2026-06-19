export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cairo", "sans-serif"],
        display: ["Playfair Display", "serif"],
        arabic: ["Amiri", "serif"]
      },
      colors: {
        ink: {
          900: "#0a0908",
          800: "#121110",
          700: "#1a1816",
          600: "#221f1c",
          500: "#5c564c"
        },
        gold: {
          200: "#fbf0cf",
          300: "#f3e3ab",
          400: "#e8c766",
          500: "#d4af37",
          600: "#c79b2e",
          700: "#94701f"
        }
      },
      letterSpacing: {
        widest2: "0.22em"
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #f3e3ab 0%, #d4af37 50%, #94701f 100%)",
        "gold-line": "linear-gradient(90deg, transparent, #d4af37, transparent)",
        "radial-fade": "radial-gradient(circle at 50% 25%, rgba(212,175,55,0.14) 0%, rgba(10,9,8,0) 60%)"
      },
      boxShadow: {
        gold: "0 20px 60px -15px rgba(212,175,55,0.45)",
        goldsm: "0 0 22px rgba(212,175,55,0.55)"
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { opacity: 0.55, transform: "scale(1)" },
          "50%": { opacity: 0.9, transform: "scale(1.06)" }
        },
        "fade-up": {
          "0%": { opacity: 0, transform: "translateY(24px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        "pulse-soft": "pulse-soft 3.5s ease-in-out infinite",
        "fade-up": "fade-up 0.8s ease-out forwards"
      }
    }
  },
  plugins: []
};
