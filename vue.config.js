const path = require('path')

console.log('________', path.resolve(__dirname, './src/styles/reset.scss'))

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
