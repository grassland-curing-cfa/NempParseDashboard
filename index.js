// Example express application adding the parse-dashboard module to expose Parse Dashboard compatible API routes.

var express = require('express');
var ParseDashboard = require('parse-dashboard');
var path = require('path');

var dashboard = new ParseDashboard({
  apps: [
    {
      "appId": process.env.APP_ID || 'myAppId',
      "masterKey": process.env.MASTER_KEY || 'myMasterKey',
      "serverURL": process.env.SERVER_URL || 'http://localhost:1337/parse',
      "appName": process.env.APP_NAME || 'MyApp',
    },
    {
      appId: process.env.APP_ID1 || 'myAppId',
      masterKey: process.env.MASTER_KEY1 || 'myMasterKey',
      serverURL: process.env.SERVER_URL1 || 'http://localhost:1337/parse',
      appName: process.env.APP_NAME1 || 'MyApp',
    },
    {
      appId: process.env.APP_ID2 || 'myAppId',
      masterKey: process.env.MASTER_KEY2 || 'myMasterKey',
      serverURL: process.env.SERVER_URL2 || 'http://localhost:1337/parse',
      appName: process.env.APP_NAME2 || 'MyApp',
    },
    {
      appId: process.env.APP_ID3 || 'myAppId',
      masterKey: process.env.MASTER_KEY3 || 'myMasterKey',
      serverURL: process.env.SERVER_URL3 || 'http://localhost:1337/parse',
      appName: process.env.APP_NAME3 || 'MyApp',
    },
    {
      appId: process.env.APP_ID4 || 'myAppId',
      masterKey: process.env.MASTER_KEY4 || 'myMasterKey',
      serverURL: process.env.SERVER_URL4 || 'http://localhost:1337/parse',
      appName: process.env.APP_NAME4 || 'MyApp',
    },
    {
      appId: process.env.APP_ID5 || 'myAppId',
      masterKey: process.env.MASTER_KEY5 || 'myMasterKey',
      serverURL: process.env.SERVER_URL5 || 'http://localhost:1337/parse',
      appName: process.env.APP_NAME5 || 'MyApp',
    },
    {
      appId: process.env.APP_ID6 || 'myAppId',
      masterKey: process.env.MASTER_KEY6 || 'myMasterKey',
      serverURL: process.env.SERVER_URL6 || 'http://localhost:1337/parse',
      appName: process.env.APP_NAME6 || 'MyApp',
    },
    {
      appId: process.env.APP_ID7 || 'myAppId',
      masterKey: process.env.MASTER_KEY7 || 'myMasterKey',
      serverURL: process.env.SERVER_URL7 || 'http://localhost:1337/parse',
      appName: process.env.APP_NAME7 || 'MyApp',
    },
    {
      appId: process.env.APP_ID8 || 'myAppId',
      masterKey: process.env.MASTER_KEY8 || 'myMasterKey',
      serverURL: process.env.SERVER_URL8 || 'http://localhost:1337/parse',
      appName: process.env.APP_NAME8 || 'MyApp',
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
