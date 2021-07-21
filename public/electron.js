const path = require("path");
const { app, BrowseWindow } = require("electron");
const isDev = require("electron-is-dev");
const { BrowserWindow } = require("electron/main");

function createWindow() {
  //Creando la ventana del navegador
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
  });

/* Y cargame el index.html de la app
win.loadFile("index.html") */

win.loadURL(
  isDev
    ? "http://localhost:3000"
    : `file://${path.join(__dirname, "../build/index.html")}`
);

//Abre DevTools

if (isDev) {
  win.webContents.openDevTools({ mode: detach });
}

}
/*Este metodo sera llamado cuando electron haya finalizado
Inicializacion y esta listo para crear la ventana del navegador
Algunas APIS solo pueden ser usadas despues de que este evento ocurra*/

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  //Si la plataforma no es IOS entonces se cierra
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
