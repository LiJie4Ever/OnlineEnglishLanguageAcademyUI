var express = require('express');
var path = require('path');
var app = express();

app.get('/dist*', function (req, res) {
   res.sendFile( path.join(__dirname , "../" + req.url));
});
app.use(function (req, res) {
	res.sendFile(path.join( __dirname , "../dist/" + "index.html" ));
});
 
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("running on http://%s:%s", host, port)
});