#!/bin/bash

# Publishes on pushes to Master.
echo "PUBLISHING!"
echo "BRANCH :: $TRAVIS_BRANCH"
git checkout master
git pull origin master
yarn run standard-version
git push origin master
yarn publish
