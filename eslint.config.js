const nx = require('@nx/eslint-plugin');
const { plugin } = require('typescript-eslint');

module.exports = [
  ...nx.configs['flat/base'],
  ...nx.configs['flat/typescript'],
  ...nx.configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    plugins: {
      nx,
    },
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            //  {
            //   sourceTag: 'type:app',
            //   onlyDependOnLibsWithTags: [
            // 'type:feature',
            // 'type:shared',
            // 'type:auth',
            // 'type:core',
            // 'type:store',
            //   ],
            //   },
            //  {
            //    sourceTag: 'type:auth',
            //   onlyDependOnLibsWithTags: [
            //  'type:auth',
            //    'type:feature',
            //    'type:shared',
            //   ],
            //     },
            //   {
            //    sourceTag: 'store',
            //   onlyDependOnLibsWithTags: [
            //     'type:core',
            //       'type:store',
            //     'type:shared',
            //     'type:auth',
            //    ],
            // },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
];
