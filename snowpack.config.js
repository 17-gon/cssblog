// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

const path = require('path');
const config = require("./config.js");

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    // src: { url: "/" },
    public: { url: "/", static: true },
    "src/assets/js": { url: "/assets/js" },
    "src/assets/css": { url: "/assets/css" },
    "src/assets/images": { url: "/assets/images" },
    "src/assets/svg": { url: "/assets/svg" },
    "src/assets/media": { url: "/assets/media" },
    // 'public/assets/css/main-minMD.css': { url: "/assets/css/main-minMD.css" },
    // 'public/assets/css/main-minLG.css': { url: "/assets/css/main-minLG.css" },
  },
  plugins: [
    "@snowpack/plugin-sass",
    "@snowpack/plugin-postcss",
    "@snowpack/plugin-typescript",
    [
      "@snowpack/plugin-webpack",
      {
        /* see "Plugin Options" below */
        htmlMinifierOptions: false,
        outputPattern: {
          js: "[name].js",
        },
        extendConfig: {
          output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'build'),
            chunkFilename: (pathData) => {
              return 'assets/js/chunks/[name].js';
            },
          },
          optimization: {
            chunkIds: "named",
            runtimeChunk: {
              name: (entrypoint) => {
                return `${entrypoint.name}.runtime`;
              },
            },
          },
        },
      },
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
    hmrDelay: 300,
  },
  buildOptions: {
    /* ... */
    baseUrl: process.env.BUILD_ENV
      ? config.baseUrl[process.env.BUILD_ENV]
      : "/", // %PUBLIC_URL%
    metaUrlPath: "assets/js",
    htmlFragments: true,
  },
  // optimize: {
  //   // entrypoints: 'auto' | string[] | ((options: {files: string[]}) => string[]);
  //   preload: true,
  //   bundle: false,
  //   // loader?: {[ext: string]: Loader},
  //   // sourcemap: boolean | 'external' | 'inline' | 'both',
  //   splitting: true,
  //   treeshake: true,
  //   manifest: true,
  //   minify: true,
  //   target: 'es2018',
  // }
};
