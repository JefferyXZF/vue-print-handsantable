const path = require('path')

function resolve (dir) {
  return path.resolve(__dirname, dir)
}

module.exports = {
  // 修改 src 为 examples
  pages: {
    index: {
      entry: 'examples/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },
  css: {
    extract: false
  },
  // pluginOptions: {
  //   'style-resources-loader': {
  //     preProcessor: 'sass',
  //     patterns: [
  //       resolve('./packages/theme-css/*.scss') // .scss文件所在目录
  //     ]
  //   }
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@scss': resolve('./packages/theme-scss')
      }
    }
  },
  // 扩展 webpack 配置，使 packages 加入编译
  chainWebpack: config => {
    config.module
      .rule('js')
      .include
      .add('/packages')
      .end()
      .use('babel')
      .loader('babel-loader')
      .tap(options => {
        // 修改它的选项...
        return options
      })
      .end()

    // scss
    config.module
      .rule('scss')
      .use('sass-loader')
      .tap((options) => {
        // options.outputStyle = 'expanded'
        return options
      })
      .end()
  }
}
