// Example express application adding the parse-dashboard module to expose Parse Dashboard compatible API routes.

var express = require('express');
var ParseDashboard = require('parse-dashboard');
var path = require('path');

var dashboard = new ParseDashboard({
  apps: [
    {
      "appId": process.env.APP_ID || '',
      "masterKey": process.env.MASTER_KEY || '',
      "serverURL": process.env.SERVER_URL || '',
      "appName": process.env.APP_NAME || ''
    },
    {
      appId: process.env.APP_ID1 || '',
      masterKey: process.env.MASTER_KEY1 || '',
      serverURL: process.env.SERVER_URL1 || '',
      appName: process.env.APP_NAME1 || ''
    },
    {
      appId: process.env.APP_ID2 || '',
      masterKey: process.env.MASTER_KEY2 || '',
      serverURL: process.env.SERVER_URL2 || '',
      appName: process.env.APP_NAME2 || ''
    },
    {
      appId: process.env.APP_ID3 || '',
      masterKey: process.env.MASTER_KEY3 || '',
      serverURL: process.env.SERVER_URL3 || '',
      appName: process.env.APP_NAME3 || ''
    },
    {
      appId: process.env.APP_ID4 || '',
      masterKey: process.env.MASTER_KEY4 || '',
      serverURL: process.env.SERVER_URL4 || '',
      appName: process.env.APP_NAME4 || ''
    },
    {
      appId: process.env.APP_ID5 || '',
      masterKey: process.env.MASTER_KEY5 || '',
      serverURL: process.env.SERVER_URL5 || '',
      appName: process.env.APP_NAME5 || ''
    },
    {
      appId: process.env.APP_ID6 || '',
      masterKey: process.env.MASTER_KEY6 || '',
      serverURL: process.env.SERVER_URL6 || '',
      appName: process.env.APP_NAME6 || ''
    },
    {
      appId: process.env.APP_ID7 || '',
      masterKey: process.env.MASTER_KEY7 || '',
      serverURL: process.env.SERVER_URL7 || '',
      appName: process.env.APP_NAME7 || ''
    },
    {
      appId: process.env.APP_ID8 || '',
      masterKey: process.env.MASTER_KEY8 || '',
      serverURL: process.env.SERVER_URL8 || '',
      appName: process.env.APP_NAME8 || ''
    }
  ],
  "users": [
    {
      "user": process.env.USER || 'user',
      "pass": process.env.PASSWORD || 'pass'
    }
  ]
});

var app = express();
app.enable('trust proxy');

// make the Parse Dashboard available at /
app.use('/', dashboard);

var port = process.env.PORT || 4040;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-dashboard-example running on port ' + port + '.');
});
