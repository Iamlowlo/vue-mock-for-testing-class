const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        sassOptions: {
          includePaths: [path.resolve(__dirname, './src/styles/reset.scss')]
        },
        additionalData: `@import "~@/styles/variables.scss";`
      }
    }
  }
}
