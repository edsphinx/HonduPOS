const { app, BrowserWindow } = require("electron");
const createServer = require("./Server/index.js").createServer;
let win;
const serve = require("electron-serve");
const isDev = require("electron-is-dev");
const loadURL = serve({ directory: "./build" });
const path = require("path");

createServer(isDev);
async function createWindow() {
  await app.whenReady();
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Hondupos",
    autoHideMenuBar: true,
    show: false,
    icon: path.join(__dirname, "assets/Icons/win-icon.ico"),
    webPreferences: {
      nodeIntegration: true
    }
  });
  mainWindow.maximize();
  if (isDev) {
    mainWindow.loadURL("http://localhost:3000/");
  } else {
    await loadURL(mainWindow);
  }
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
