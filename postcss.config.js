/*
メディアクエリーをまとめるのとソートに postcss-sort-media-queries を使用する予定
widthにprintなど他の指定があるとソートされないバグがあり、issueされているので修正待ち
それまで css-mqpacker が非推奨だが使用する
*/

// const purgecss = require('@fullhuman/postcss-purgecss')

const path = require('path')

const config = {
  plugins: [
    require('autoprefixer'),
    require('postcss-preset-env'),
    require('postcss-sort-media-queries')({
      sort: 'mobile-first'
    })
  ]
}

if (process.env.BUILD_ENV === 'build') {
  config.plugins = [
    require('postcss-extract-media-query')({
      entry: path.join(__dirname, 'build/assets/css/main.css'),
      status: true,
      extractAll: false,
      queries: {
        '(min-width: 1024px)': 'minLG',
        '(min-width: 768px)': 'minMD'
      },
      output: {
        path: path.join(__dirname, 'build/assets/css'),
        name: '[name]-[query].css'
      }
    })
  ]
}

if (process.env.BUILD_ENV === 'optimize') {
  config.plugins = [
    require('cssnano')({ preset: 'default' })
  ]
}

module.exports = config
