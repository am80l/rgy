#!/bin/bash

yarn global add standard-version
# Publishes on pushes to Master.
echo "PUBLISHING!"
echo "BRANCH :: $TRAVIS_BRANCH"
git checkout master
git pull origin master
yarn run release --silent
git push
yarn publish --non-interactive