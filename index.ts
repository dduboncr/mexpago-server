import fastify from 'fastify';

const server = fastify();

server.get('/', async (request, reply) => {
  const data = request.body;

  return {
    data,
  };
});

server.post('/success', async (request, reply) => {
  const data = request.body;

  return {
    data,
  };
});

server.post('/error', async (request, reply) => {
  const data = request.body;

  return {
    data,
  };
});

server.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log('running server');
});
