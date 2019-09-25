# server-side-wasm-sample

こちらのブログ記事のサンプルです。
https://www.gmo-jisedai.com/blog/dream_of_wasm/

サンプルとしてコンパイル済みのwasmファイルもリポジトリに含めているので、Emscriptenの環境を準備しなくても試すことができます。

This repository contains a compiled wasm module. You can run this app without Emscripten.

```
$ git clone git@github.com:miyakelp/server-side-wasm-sample.git
$ cd server-side-wasm-sample
$ npm install
$ npm start
```

ブラウザで http://localhost:3000 にアクセスすると計測が始まります。
