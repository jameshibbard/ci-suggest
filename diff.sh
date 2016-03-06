#!/usr/bin/env bash

upstream="git@github.com:danprince/ci-suggest.git"
remotes=$(git remote show)

# add this remote if it doesn't already exist
git remote show | grep -q '^upstream$'
remote_exists=$?
if [[ $remote_exists -ne 0 ]] ; then
  git remote add upstream $upstream > /dev/null
fi

# diff against upstream master
git fetch upstream
changed_files=$(git diff upstream/master --name-only)

for file in $changed_files ; do
  echo $file
done

exit 1
