// Example express application adding the parse-dashboard module to expose Parse Dashboard compatible API routes.

var express = require('express');
var ParseDashboard = require('parse-dashboard');
var path = require('path');

var myApps = [];
var appIds = [];
var masterKeys = [];
var jsKeys = [];
var serverURLs = [];
var appNames = [];

var re = /\s*;\s*/;
appIds = process.env.APP_ID_List.split(re);
masterKeys = process.env.MASTER_KEY_List.split(re);
jsKeys = process.env.JAVASCRIPT_KEY_List.split(re);
serverURLs = process.env.SERVER_URL_List.split(re);
appNames = process.env.APP_NAME_List.split(re);

for ( var i = 0; i < appIds.length; i++ ) {
  var appId = appIds[i];
  var masterKey = masterKeys[i];
  var jsKey = jsKeys[i];
  var serverURL = serverURLs[i];
  var appName = appNames[i];

  var this_app = {
    "appId": appId || '',
    "masterKey": masterKey || '',
    "javascriptKey": jsKey || '',
    "serverURL": serverURL || '',    
    "appName": appName || ''
  };

  myApps.push(this_app);
}

var dashboard = new ParseDashboard({
  /*
  apps: [
    {
      "appId": process.env.APP_ID || '',
      "masterKey": process.env.MASTER_KEY || '',
      "serverURL": process.env.SERVER_URL || '',
      "appName": process.env.APP_NAME || ''
    }
  ],
  */
  "apps": myApps,
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
