const config = {
  baseUrl: {
    local: '/', // ローカル開発用パス設定
    dev: '/dev.template.lp/dist/', // テストサーバー用パス設定（test-fvなどにアップ時）
    public: '/' // 公開時用パス設定
  }
}

module.exports = config
