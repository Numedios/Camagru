# Utilisez l'image officielle Nginx en tant qu'image de base
FROM nginx:latest

# Copiez les fichiers du site web dans le répertoire de travail de Nginx
#COPY ./conf/default.conf ./etc/nginx/conf.d/default.conf

#RUN chmod 777 ./etc/nginx/conf.d/default.conf

COPY --chown=root:root ./src/main /usr/share/nginx/html
# Exposez le port 80 pour que Nginx puisse être accessible à l'extérieur du conteneur
EXPOSE 80

# Ajouter une instruction pour supprimer le cache de Nginx
RUN rm -rf /var/cache/nginx/*

# Changer le propriétaire du répertoire /usr/share/nginx/html
RUN chmod -R 755 ./usr/share/nginx/html
RUN chmod 644 ./usr/share/nginx/html/index.html
# ls -l /usr/share/nginx/html/index.html 
# Commande de démarrage pour exécuter Nginx en tant qu'utilisateur root
CMD ["nginx", "-g", "daemon off;"]
