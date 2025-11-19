#!/bin/bash

docker-compose pull

docker-compose up -d --force-recreate --remove-orphans

sleep 10
docker image prune -a -f
docker volume prune -f
