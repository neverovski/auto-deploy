#!/bin/sh
cd ../

if ! [ -x "$(command -v docker-compose)" ]; then
  echo 'Error: docker-compose is not installed.' >&2
  exit 1
fi

echo "### Git pull ..."
git pull

echo "### Starting Build ..."
docker-compose up -d --build
