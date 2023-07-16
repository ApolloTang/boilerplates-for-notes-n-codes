#!/usr/bin/env bash

entry="$1"
echo "file to run: $entry"

dir=$(dirname "$1")
echo "dir to watch: $dir"

nodemon -w $dir -x ts-node --logError $entry

