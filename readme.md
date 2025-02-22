# My Social App

My Social App は、Electron を使用して作成した簡単なソーシャルメディアアプリです。Twitter や Instagram のように、ユーザーが投稿を作成し、一覧表示する機能を備えています。

## 主な機能

- 📝 **投稿機能**: ユーザーがメッセージを投稿できる。
- 📋 **投稿一覧**: 投稿がリアルタイムで一覧に表示される。
- 🔐 **ユーザー認証 (予定)**: Firebase Authentication によるログイン/登録機能。
- 🖼️ **画像投稿 (予定)**: Firebase Storage を利用した画像アップロード機能。
- 🔔 **デスクトップ通知 (予定)**: Electron の通知機能を利用。

## 環境構築

```bash
git clone https://github.com/yue4521/socialApp
cd socialApp
npm init -y
npm install
node server.js  # サーバー起動
npm start       # アプリ起動
```

## バージョン

| パッケージ | バージョン |
| ---- | ---- |
| node.js | [v20.18.2](https://nodejs.org/ja/blog/release/v20.18.2) |
| electron | [v34.2.0](https://releases.electronjs.org/release/v34.2.0) | 
| react | [v19.0.0](https://ja.react.dev/blog/2024/12/05/react-19) | 
| firebase | v11.3.1 |
| tailwind CSS | [v3.4.17](https://v3.tailwindcss.com) |
| socket.io | [v4.8.1](https://socket.io/docs/v4/changelog/4.8.1) | 

## 📜 ライセンス

MIT License
