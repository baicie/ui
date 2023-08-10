#!/bin/sh

set -e

pnpm i --frozen-lockfile --ignore-scripts

pnpm update-version

pnpm build

cd packages/core
npm publish --access public
cd -

cd packages/docs
npm publish --access public
cd -

cd packages/vue
npm publish --access public
cd -

echo "✅ Publish completed"
