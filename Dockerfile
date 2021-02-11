FROM node:12.2.0

ENV WORKDIR /app
WORKDIR $WORKDIR

RUN apt-get update && \
    apt-get install -y nginx \
    && rm -rf /var/lib/apt/lists/*

ENV PATH /home/app/node_modules/.bin:$PATH

COPY . /app

RUN npm install
RUN npm install -g @angular/cli@8.0.3

EXPOSE 80

RUN ng build --prod

RUN rm -rf /var/www/html/ && cp -rf /app/dist/word-suggestions/ /var/www/html/

CMD ["nginx", "-g", "daemon off;"]
