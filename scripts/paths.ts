import path from 'node:path';

export const rootPath = path.resolve(__dirname,'..')

export const stencilCachePath = path.resolve(rootPath,'.stencil')

export const stencilWWWPath = path.resolve(stencilCachePath,'www')
