const hapi = require('hapi');
const port = process.env.PORT || 4000;

const server = new hapi.Server();

server.connection({ port: port});

server.register(require('inert'), (err) => {
  if (err) throw err;

  server.route({
    method: 'GET',
    path: '/{file*}',
    handler: {
      directory: {
        path: 'public/',
      }
    }
  });
});

server.start( (err) => {
  if (err) throw err;
  console.log(`server is running on: ${server.info.uri}`);
});
