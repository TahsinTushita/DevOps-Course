# Docker-nginx
## Installing nginx in ubuntu Dockerfile
- These commands should be written in the Dockerfile
```sh
FROM ubuntu
RUN apt update
RUN apt install nginx -y
COPY index.html /var/www/html
CMD ["nginx","-g","daemon off;"]
```
- From the terminal, the Dockerfile should be first built and then run in a port
```sh
sudo docker build -t DockerImageName .
sudo docker run -p 8081:80 DockerImageName
```
- After running the image, localhost:8081 should show the contents of the index.html page
## Why nginx should run in my Dockerfile
While writing the Dockerfile, the initial command that I wrote for showing the custom index.html file instead of the welcome page of nginx was- 
```sh
COPY index.html /usr/share/nginx/html
```
But this wasn't working for me, the index.html page didn't show after running the image. So I searched up the issue and found in a stackoverflow post that /var/www/html can be used as the document root of nginx. Then another post said that /var/www/html is the configured location for the default server's document root while /usr/share/nginx/html is the compiled-in default location for each server's document root, in the absence of one being specified.
My guess is that the document root of nginx was specified at /var/www/html, that is why my html page wasn't showing as I gave the wrong destination in the COPY command.
