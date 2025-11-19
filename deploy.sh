#!/bin/bash

# Nettoie AVANT de pull pour libérer de l'espace
docker system prune -a -f --volumes

# Pull les nouvelles images
docker-compose pull

# Redémarre les services
docker-compose up -d

# Nettoie APRÈS pour supprimer les anciennes versions
sleep 10
docker system prune -a -f --volumes