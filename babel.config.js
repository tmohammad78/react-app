module.exports = {
  // "presets": [["@babel/preset-env", { "modules": false }], "@babel/preset-react"],
  presets: [
    [
      '@babel/preset-env',
      {
        useBuiltIns: 'usage',
        targets: {
          node: 'current'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    'react-hot-loader/babel',
    // "transform-react-jsx",
    '@babel/plugin-proposal-class-properties',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          services: './src/services',
          pages: './src/pages'
        }
      }
    ],

    [
      'babel-plugin-styled-components',
      {
        minify: true,
        transpileTemplateLiterals: true
      }
    ],
    ['@babel/plugin-transform-modules-commonjs'],
    'transform-react-remove-prop-types',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-inline-elements',
    '@babel/plugin-transform-runtime',

    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-do-expressions'
  ]
};
