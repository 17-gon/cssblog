module.exports = {
  sitename: 'プロジェクト名',
  url: 'https://test-fv.net/dev.template.lp/dist',
  assets: 'assets',
  cssFileNameFront: process.env.BUILD_ENV
    ? 'main.css'
    : 'main.css',
  msapplicationTileColor: '#ffffff',
  themeColor: '#ffffff',
  charset: 'utf-8',
  lang: 'ja',
  locale: 'ja_JP',
  author: 'プロジェクト名',
  icon: '/assets/images/favicon.png',
  appleTouchIcon: '/assets/images/apple-touch-icon.png'
}
