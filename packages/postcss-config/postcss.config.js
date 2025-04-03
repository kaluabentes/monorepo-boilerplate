module.exports = {
  plugins: {
    "postcss-import": {},
    "postcss-preset-env": {
      autoprefixer: {
        flexbox: "no-2009",
      },
      stage: 1,
      features: {
        "custom-properties": false,
        "custom-media-queries": true,
      },
    },
    "postcss-mixins": {},
    "postcss-flexbugs-fixes": {},
    "postcss-color-function": {},
    "postcss-functions": {
      functions: {
        rem: (value) => {
          const baseFontSize = 16
          return `${parseFloat(value) / baseFontSize}rem`
        },
      },
    },
  },
}
