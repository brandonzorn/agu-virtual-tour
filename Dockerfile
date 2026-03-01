FROM nginx:alpine

RUN sed -i '1iload_module modules/ngx_http_acme_module.so;' /etc/nginx/nginx.conf