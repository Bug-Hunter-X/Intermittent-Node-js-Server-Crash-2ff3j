const http = require('http');

const requestListener = (request, response) => {
  try {
    response.writeHead(200);
    response.end('Hello, World!');
  } catch (error) {
    console.error('Request handling error:', error);
    response.writeHead(500);
    response.end('Internal Server Error');
  }
};

const server = http.createServer(requestListener);

server.on('error', (error) => {
  console.error('Server error:', error);
});

server.listen(8080, () => {
  console.log('Server listening on port 8080');
});