module.exports = {
  presets: [
    [
      '@babel/preset-env',
      //   {
      //     modules: false,
      //     targets: {
      //       node: 'current',
      //     },
      //   },
    ],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-hot-loader/babel',
    '@babel/plugin-proposal-class-properties',
    '@loadable/babel-plugin',
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'babel-plugin-styled-components',
      {
        ssr: true,
        minify: true,
        transpileTemplateLiterals: true,
      },
    ],
    ['@babel/plugin-transform-modules-commonjs'],
    'transform-react-remove-prop-types',
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-transform-react-constant-elements',
    '@babel/plugin-transform-react-inline-elements',
    '@babel/plugin-transform-runtime',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-logical-assignment-operators',
    '@babel/plugin-proposal-do-expressions',
  ],
};

// {
//   "presets": [
//     [
//       "@babel/preset-env",
//       // {
//       //   "modules": false,
//       //   "useBuiltIns": "entry",
//       //   "corejs": 3.6,
//       //   "targets": {
//       //     "node": "current"
//       //   }
//       // }
//     ],
//     "@babel/preset-react",
//     "@babel/preset-typescript"
//   ],
//   "plugins": [
//     "react-hot-loader/babel",
//     "@loadable/babel-plugin",
//     "@babel/plugin-proposal-class-properties",
//     ["@babel/plugin-proposal-decorators", { "legacy": true }],
//     [
//       "babel-plugin-styled-components",
//       {
//         "ssr": true,
//         "minify": true,
//         "transpileTemplateLiterals": true
//       }
//     ],
//     ["@babel/plugin-transform-modules-commonjs"],
//     "transform-react-remove-prop-types",
//     "@babel/plugin-syntax-dynamic-import",
//     "@babel/plugin-transform-react-constant-elements",
//     "@babel/plugin-transform-react-inline-elements",
//     "@babel/plugin-transform-runtime",
//     "@babel/plugin-proposal-export-default-from",
//     "@babel/plugin-proposal-logical-assignment-operators",
//     "@babel/plugin-proposal-do-expressions"
//   ]
// }
