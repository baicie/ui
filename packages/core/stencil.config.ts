import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
export const config: Config = {
  autoprefixCss: true,
  sourceMap: false,
  namespace: 'Baicie',
  bundles:[

  ],
  plugins: [
    sass(),
  ],
  outputTargets: [
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
      sourceCodeBaseUrl: 'https://github.com/ionic-team/ionic/tree/main/core/',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      // dir: 'components',
      // copy: [{
      //   src: '../scripts/custom-elements',
      //   dest: 'components',
      //   warn: true
      // }],
      // includeGlobalScripts: false
    },
    {
      type: 'docs-json',
      file: '../docs/core.json'
    },
    {
      type: 'dist-hydrate-script'
    },
    // apiSpecGenerator({
    //   file: 'api.txt'
    // }) as any,

  ],
  buildEs5: 'prod',
  testing: {
    moduleNameMapper: {
      "@utils/test": ["<rootDir>/src/utils/test/utils"],
      "@utils/logging": ["<rootDir>/src/utils/logging"],
    },
  },
  preamble: '(C) Ionic http://ionicframework.com - MIT License',
  // globalScript: 'src/global/ionic-global.ts',
  enableCache: true,
  transformAliasedImportPaths: true,
};
