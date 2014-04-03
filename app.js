var express = require('express');
var routes = require('./routes');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Example Data
var games = [
  { title: 'Diablo III: Reaper of Souls', developer: 'Blizzard Entertainment'},
  { title: 'Infamous: Second Son', developer: 'Sucker Punch Productions'},
  { title: 'Darksouls II', developer: 'From Software'},
  { title: 'The Last of Us', developer: 'Naughty Dog'},
];

// Example Routes
app.get('/', routes.index);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
