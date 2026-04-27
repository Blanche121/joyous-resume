# 使用 Nginx 作为静态文件服务器
FROM nginx:alpine

# 复制静态文件到 Nginx 默认目录
COPY dist/ /usr/share/nginx/html/

# 复制自定义 Nginx 配置
RUN echo 'server { \
    listen 80; \
    server_name localhost; \
    root /usr/share/nginx/html; \
    index index.html; \
    location / { \
        try_files $uri $uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

# 暴露 80 端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]