const Path = require('path');
const hirestime = require('hirestime');
const { Nuxt, Builder, Generator } = require('nuxt');

module.exports = async function(request, reply) {
  try {
    const getElapsed = hirestime();
    const nuxtConfig = require('./nuxt.config.js')();
    nuxtConfig.dev = false;

    const { payload } = request;
    const { name } = payload;
    const uploadFolderPath = Path.join(__dirname, `./dist/${name}`);

    nuxtConfig.generate.dir = uploadFolderPath;
    nuxtConfig.generate.routes = [
      {
        route: '/',
        payload,
      },
    ];

    console.log(`About to generate page: ${name}`);
    const nuxt = new Nuxt(nuxtConfig);
    const builder = new Builder(nuxt);
    const generator = new Generator(nuxt, builder);

    const generateResult = await generator.generate({
      build: false,
    });

    const result = `Published in ${getElapsed(hirestime.S)}s`;
    return result;
  } catch (e) {
    console.error(e);
    throw new Error(e);
  }
};
