# Utilise l'image Nginx officielle comme base
FROM nginx:latest

# Supprime le contenu du répertoire de cache de Nginx
RUN rm -rf /var/cache/nginx/*

# Copie les fichiers du répertoire src local vers le répertoire HTML de Nginx
COPY  ./src /usr/share/nginx/html

# Définit les permissions appropriées pour les fichiers
RUN chmod -R 755 /usr/share/nginx/html

# Expose le port 80 (il n'est pas nécessaire de le répéter ici, mais c'est bon pour la clarté)
EXPOSE 80

# Commande de démarrage de Nginx (déjà incluse dans l'image nginx)
CMD ["nginx", "-g", "daemon off;"]
