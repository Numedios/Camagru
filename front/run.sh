#!/bin/bash

# Construire l'image Docker
docker build -t camagruimage .

sleep 5
# Lancer le conteneur en mode développement
docker run -d -p 8080:80 --name camagrucontainer -v ./mnt/nfs/homes/sbelabba/Desktop/camagru/front/src/main:/usr/share/nginx/html camagruimage

# Afficher le statut du conteneur
docker ps
