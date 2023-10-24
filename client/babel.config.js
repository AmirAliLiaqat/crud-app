module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
        modules: "commonjs", // Use "commonjs" for testing environment
      },
    ],
  ],
};
