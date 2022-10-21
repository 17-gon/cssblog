# LP専用静的サイト構築テンプレート（v1.0.0）
[LP専用静的サイト構築テンプレート（v1.0.0）](https://test-fv.net/dev.template.lp/dist/)

## 更新履歴
- 【2022.05.15】[静的サイト構築テンプレートをベースにLP専用テンプレートを作成](https://github.com/frontier-vision/dev.template.site)

---
---

## 技術スタック・処理内容
- [Snowpack](https://www.snowpack.dev/)
- [Eleventy（11ty）](https://www.11ty.dev/)

### 開発とビルド時の異なる処理
**ビルド時：以下ブレークポイントで分割したファイルをminifyして出力**
- main.css（以下2点以外）
- main-minLG.css（min-width: 1024px）
- main-minMD.css（min-width: 768px）

**ビルド時：トップのみ専用CSSを読み込み**
- front.main.css（PurgeCSSで必要最低限のスタイルのみ抽出）

### CSS設計
- SCSS（BEM, FLOCSS）
- [FLOCSS](https://github.com/hiloki/flocss/)
- [BEM](https://en.bem.info/)

---
---
## v1系：更新履歴
- 【2022.05.12】CSSの指定誤り等を修正（sub・supの処理、l-hero__parentが2つ存在した）
- 【2022.03.28】v1.3.2 JS：スムーススクロールのY座標取得の計算方法を変更、【廃止】電話番号タップでトラッキング計測（GTM側の設定で完了するため）
- 【2022.02.25】v1.3.0 サンクスページの追加
- 【2022.02.22】v1.2.0 JS：サムネイル付きスライダー機能の追加、スライダーでフェードできない問題を解決
- 【2022.02.04】v1.1.1 ページャーのリンクを ./ に変更
- 【2022.01.26】v1.1.0としてアップデート、UIサンプル追加, フォーム・投稿のサンプルページを追加
- 【2022.01.16】build時にminLGとminMDで分割しminifyし書き出す機能を追加

---
---

## Node.js
.nvmrc に記載

---
---

## 準備
### [config.js設定](https://github.com/frontier-vision/dev.template.site/blob/main/config.js)
**./config.js**
1. `local`: `npm run start` 時に適用
2. `dev`: `npm run build` 時に適用
3. `public`: `npm run public` 時に適用
```
const config = {
  baseUrl: {
    local: '/', // ローカル開発用パス設定
    dev: '/dev.template.site/dist/', // テストサーバー用パス設定（test-fvなどにアップ時）
    public: '/' // 公開時用パス設定
  }
}
```

### [metadata.js設定](https://github.com/frontier-vision/dev.template.site/blob/main/src/_data/metadata.js)
**./src/_data/metadata.js**  
1. `sitename`：プロジェクト名を設定
2. `url`：本番環境のURLを設定（**末尾のスラッシュは不要**）
3. `cssFileNameFront`：トップページ専用のCSSを指定（buildコマンド時のみ適用）
4. `author`：基本プロジェクト名を設定
他は必要であれば変更する
```
module.exports = {
  sitename: 'プロジェクト名',
  url: 'https://test-fv.net/dev.template.site/dist',
  assets: 'assets',
  cssFileNameFront: process.env.BUILD_ENV
    ? 'front.main.css'
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
```
---
---
## 開発手順
1. リポジトリのクローン
2. node.jsバージョンを変更（.nvmrc に記載）
3. `npm install`
4. `npm run start`
5. 開発サーバー起動

※[アイコンシート](http://localhost:8080/assets/svg/)

---
---
## ビルド手順
- `npm run build`：テストサーバー用（test-fv.netやチェックサーバー）
- `npm run public`：本番サーバー用（データ納品等で使用する）

---
---

## フロントエンド
| ビルド後   | 開発時                                          |
| ---------- | ----------------------------------------------- |
| HTML       | [Nunjucks](https://mozilla.github.io/nunjucks/) |
| CSS        | [Sass（SCSS）](https://sass-lang.com/)          |
| JavaScript | JavaScript                                      | 

※一部[TypeScript](https://www.typescriptlang.org/)ファイルがあるがWeb制作では学習コストの割に恩恵があまりないため使わない方針
