/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js}"
  ],

  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      colors: {
        primary: "#1e40af",     
        secondary: "#1e3a8a",   
        light: "#f3f4f6",       
      },

      boxShadow: {
        soft: "0 4px 12px rgba(0,0,0,0.08)",
        medium: "0 6px 18px rgba(0,0,0,0.12)",
      },

      backgroundImage: {
        "header-img":
          "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80')",
      },
    },
  },

  plugins: [],
};
