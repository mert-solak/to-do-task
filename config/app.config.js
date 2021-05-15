module.exports = {
  name: 'task',
  exposes: {
    './TaskApp': './src/bootstrap',
  },
  development: {
    port: 8082,
    url: 'http://localhost',
  },
  production: {},
};
