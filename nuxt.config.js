module.exports = function() {
  return {
    generate: {
      dir: 'dist/should-be-overridden',
      minify: {
        removeOptionalTags: false,
        collapseWhitespace: false,
      },
    },
  };
};
