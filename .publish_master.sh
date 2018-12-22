#!/bin/bash

# Publishes on pushes to Master.
echo "Determining if we're publishing.."
echo "BRANCH :: $TRAVIS_BRANCH"

if [[ $TRAVIS_BRANCH == 'master' ]]
    git checkout master
    git pull origin master
    yarn run standard-version
    git push --follow-tags origin master
    yarn publish
else
    echo "Not Publishing!"
fi
    