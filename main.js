const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 600,
    webPreferences: {
      nodeIntegration: false, // Reactアプリ上でnodeのAPIを使わない設定
      contextIsolation: true, // セキュリティのため、通常はこちらをtrueに
    },
  });

  // 開発時はWebpackでビルドされたファイルを読み込む
  // `dist/index.html`をロードする想定
  mainWindow.loadURL(`file://${path.join(__dirname, 'dist', 'index.html')}`);

  // 開発ツールを開いておきたい場合はコメントアウトを外す
  // mainWindow.webContents.openDevTools();
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', function () {
    // macOS でDockアイコンがクリックされた際にウィンドウがなければ再生成
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// すべてのウィンドウが閉じられたらアプリを終了
app.on('window-all-closed', function () {
  // macOSはユーザが明示的に終了するまでアプリをアクティブにすることが多い
  if (process.platform !== 'darwin') {
    app.quit();
  }
});