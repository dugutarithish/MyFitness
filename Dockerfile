FROM nginx:alpine

RUN rm -rf /use/share/nginx/html/*

COPY MYFITNESS.HTML /usr/share/nginx/html/index.html
COPY STYLE.CSS /usr/share/nginx/html/style.css
COPY SCREPT.JS /usr/share/nginx/html/script.js

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
