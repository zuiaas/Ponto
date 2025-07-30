import { app, BrowserWindow } from "electron";
import path from "path";

function createWindow() {
    const win = new BrowserWindow({
        width: 1000,
        height: 700,
        minWidth: 700,
        minHeight: 500,
        autoHideMenuBar: true,
        webPreferences: {
            preload: "preload.js"
        }
    });

    win.loadURL("http://localhost:5173");
    // win.loadFile(join(__dirname, 'dist/index.html'));
}

app.whenReady().then(() => {
    createWindow();

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});