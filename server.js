var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');
var port = process.env.PORT || 80;
app = express();
app.use(serveStatic(__dirname + "/dist"));
app.listen(port);
console.log('server started '+ port);