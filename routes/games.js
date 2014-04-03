// Example Data
var games = [
  { title: 'Diablo III: Reaper of Souls', developer: 'Blizzard Entertainment'},
  { title: 'Infamous: Second Son', developer: 'Sucker Punch Productions'},
  { title: 'Darksouls II', developer: 'FromSoftware'},
  { title: 'The Last of Us', developer: 'Naughty Dog'}
];

// GET all games
exports.index = function(req, res) {
  res.json(games);
};

// GET a specific game
exports.show = function(req, res) {
  // Make sure the requested game exists, return 404 if not.
  if (games.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.json({status: 404, error: '404 Not Found'});
  }

  // Respond with the proper game.
  var game = games[req.params.id];
  res.json(game);
}

// POST a game
exports.post = function(req, res) {
  if (!req.body.hasOwnProperty('title') || !req.body.hasOwnProperty('developer')) {
    res.statusCode = 400;
    return res.json({status: 400, error: '400: Invalid POST syntax.'});
  }

  var game = {
    title: req.body.title,
    developer: req.body.developer
  };

  games.push(game);
  res.json(true);
}

// DELETE a game
exports.delete = function(req, res) {
  // Make sure the game exists before trying to delete it.
  if (games.length <= req.params.id || req.params.id < 0) {
    res.statusCode = 404;
    return res.json({status: 404, error: '404 Not Found'});
  }

  // Delete the game.
  games.splice(req.params.id, 1);
  res.json(true);
}