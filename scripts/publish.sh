#!/bin/sh

set -e

pnpm i --frozen-lockfile --ignore-scripts

pnpm update-version

pnpm build

cd packages/core
pnpm publish --access public
cd -

cd packages/docs
pnpm publish --access public
cd -

cd packages/vue
pnpm publish --access public
cd -

echo "✅ Publish completed"
