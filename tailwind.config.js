module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/src/images/daily/image.webp')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
