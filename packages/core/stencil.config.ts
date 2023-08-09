import { Config } from '@stencil/core';
import { stencilCachePath ,stencilWWWPath} from '../../scripts/paths';
import { sass } from '@stencil/sass';

export const config: Config = {
  autoprefixCss: true,
  sourceMap: false,
  namespace: 'baccie',
  cacheDir:stencilCachePath,
  plugins: [
    sass(),
  ],
  buildEs5: 'prod',
  outputTargets: [
    {
      type: 'docs-vscode',
      file: 'dist/html.html-data.json',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
      // copy: [{
      //   src: '../scripts/custom-elements',
      //   dest: 'components',
      //   warn: true
      // }],
      includeGlobalScripts: false
    },
    {
      type: 'docs-readme',
      // file: '../docs/core.json'
    },
    {
      type: 'dist-hydrate-script'
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
      dir:stencilWWWPath
    },
  ],
  testing: {
    browserHeadless: "new",
  },
  enableCache: true,
  transformAliasedImportPaths: true,
};
