window.addEventListener('DOMContentLoaded', () => {

    const replaceText = (selector, text) => {
        const element = document.getElementById(selector)
        if (element) element.innerText = text
    }

    for (const dependency of ['chrome', 'node', 'electron']) {
        replaceText(`${dependency}-version`, process.versions[dependency])
    }
    
});

const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
    ipcRenderer: {
        send: (channel, data) => {
            const validChannels = [
                'window:minimize', 'window:toggle-maximize', 'window:close'
            ];
            
            if (validChannels.includes(channel)) {
                ipcRenderer.send(channel, data);
            }
        }
    }
});