module.exports = function override(config, env) {
    //do stuff with the webpack config...

    config.resolve.fallback = {
        "crypto": require.resolve("crypto-browserify"),
        "buffer": require.resolve("buffer/"),
        "path": require.resolve("path-browserify"),
        "stream": require.resolve("stream-browserify")
      };

    return config;
}