// Get Homepage
exports.index = function(req, res){
  res.type('text/plain');
  res.send('Howdy! This is a quick REST API test app. Please use the API to access data.\n');
};