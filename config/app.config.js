module.exports = {
  name: 'task',
  exposes: {
    './TaskApp': './src/bootstrap',
  },
  development: {
    port: 8081,
    url: 'http://localhost',
  },
  production: {},
};
