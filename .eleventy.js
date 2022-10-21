module.exports = function(eleventyConfig) {
  // オブジェクトで設定してた値は`return`に指定する（オプション）
  return {
    dir: {
      input: 'src',
      output: 'public'
    },
    // templateFormats: ['md', 'njk'] // 対象のファイルを限定する
  };
};
