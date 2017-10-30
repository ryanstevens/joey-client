var express = require('express');
var app = express();
var request = require('request');
var child_process = require('child_process');

var child = child_process.spawn('npm', ['run', 'start']);
child.stdout.pipe(process.stdout);

app.set('port', (process.env.PORT || 5000));

app.get('*', function(req, response) {
  request(`http://localhost:19000${req.url}`).pipe(response);
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});