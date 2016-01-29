var http = require('http');

var PORT = 8989;

var server = http.createServer(function (request, response) {
  response.end("HELLO WORLD");
});

server.listen(PORT, function () {
  console.log('Server running...');
});
