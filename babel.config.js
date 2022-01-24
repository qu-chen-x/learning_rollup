module.exports = {
  babelrc: false,
  ignore: ['./node_modules'],
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        modules: false,
        targets: { ie: 11 },
      },
    ],
  ],
  plugins: [['@babel/plugin-transform-react-jsx', { runtime: 'automatic' }]],
};
