const { app, BrowserWindow, Tray, Notification, Menu } = require('electron');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/icon.ico',
  });

  win.setIcon(__dirname + '/icon.ico');
  win.loadFile('index.html');

  const tray = new Tray(__dirname + '/icon.ico');
  const contextMenu = Menu.buildFromTemplate([
    {
      label: 'Notify',
      click: () => {
        new Notification({
          title: 'My Title',
          body: 'My Body',
          icon: __dirname + '/icon.ico',
        }).show();
      },
    },
    {
      label: 'Quit',
      click: () => {
        app.quit();
      },
    },
  ]);
  tray.setContextMenu(contextMenu);
};

app.whenReady().then(() => {
  createWindow();
});
