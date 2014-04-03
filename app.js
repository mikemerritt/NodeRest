var express = require('express');
var http = require('http');
var games = require('./routes/games');
var app = express();

// Setup environment
app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride())
app.use(app.router);

// Example Routes
app.get('/games', games.index);
app.get('/games/:id', games.show);
app.post('/games', games.post);
app.delete('/games/:id', games.delete);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});