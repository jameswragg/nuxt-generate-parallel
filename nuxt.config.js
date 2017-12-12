const _ = require('lodash');

const nuxtConfigDefaults = {
  generate: {
    dir: 'dist/should-be-overridden',
    minify: {
      removeOptionalTags: false,
      collapseWhitespace: false,
    },
  },
};

module.exports = nuxtConfigDefaults;

module.exports.nuxtConfigFn = function(config) {
  return _.defaultsDeep(config, nuxtConfigDefaults);
};
