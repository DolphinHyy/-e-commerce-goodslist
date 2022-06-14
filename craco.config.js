const path = require('path');
const pxToViewport = require('postcss-px-to-viewport');
const vw = pxToViewport({
  viewportWidth: 750,
});


module.exports = {
  webpack: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  style: {
    postcss: {
      mode: 'extends',
      loaderOptions: {
        postcssOptions: {
          ident: 'postcss',
          plugins: [vw]
        }
      }
    }
  }
};
