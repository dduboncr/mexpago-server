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
const port = Number(process.env.PORT) || 3000;

server.listen({ port }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});
