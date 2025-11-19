#!/bin/bash

# Arrêter et supprimer tous les containers
docker-compose down --remove-orphans

# Pull les nouvelles images
docker-compose pull

# Redémarrer avec les nouvelles images
docker-compose up -d

# Nettoyer les anciennes images et volumes après 10s
sleep 10
docker image prune -a -f
docker volume prune -f
