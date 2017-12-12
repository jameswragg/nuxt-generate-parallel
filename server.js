const Path = require('path');
const Hapi = require('hapi');
const Blipp = require('blipp');
const Boom = require('boom');
const Publisher = require('./publisher');
const nuxtConfig = require('./nuxt.config.js');

const server = new Hapi.Server();

server.connection({
  host: '0.0.0.0',
  port: 3000,
  router: {
    stripTrailingSlash: true,
  },
  routes: { cors: true },
});

server.route([
  {
    method: ['POST'],
    path: '/v1/publish',
    config: {
      tags: ['api'],
      async handler(request, reply) {
        try {
          const response = await Publisher(request, reply);
          reply({ status: 'ok', msg: response });

        } catch (err) {
          console.error(err);
          reply(Boom.badRequest(err));
        }
      },
    },
  },
]);

server.register([Blipp], async regErr => {
  server.start(srverr => {
    if (srverr) {
      throw srverr;
    } else {
      console.log(
        `Server ${process.env.NODE_ENV === 'production' ? '(Production)' : '(Dev)'} running at: ${
          server.info.uri
        }`
      );
    }
  });
});


