#!/bin/bash

docker-compose pull

docker-compose up -d

sleep 10
docker image prune -a -f
docker volume prune -f