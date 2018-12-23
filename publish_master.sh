#!/bin/bash

yarn global add standard-version
# Publishes on pushes to Master.
echo "PUBLISHING!"
echo "BRANCH :: $TRAVIS_BRANCH"
git checkout master
git pull origin master
<<<<<<< HEAD
yarn run standard-version
git push origin master
yarn publish
=======
yarn run release --silent
git push
yarn publish --non-interactive
>>>>>>> fe5f701f1a2209b195752a420dfc2a4196ae517f
