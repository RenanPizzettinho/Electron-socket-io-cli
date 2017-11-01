var electron = require('electron');
var path = require('path');
var url = require('url');
var aa = require('socket-io')();

var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow;

app.on('activate', onActivate);

app.on('ready', createWindow);

app.on('window-all-closed', function () { });

function onActivate() {

    if (mainWindow === null) {

        createWindow();

    }

}

function createWindow() {

    mainWindow = new BrowserWindow({ width: 800, height: 600 });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.on('closed', function () {

        mainWindow = null

    });

}

