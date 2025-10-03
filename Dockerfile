# pakai Node.js image resmi
FROM node:20

# set working directory
WORKDIR /usr/src/app

# copy file package.json (kalau ada)
COPY package*.json ./

# install dependencies (tidak ada, tapi tetap aman)
RUN npm install || true

# copy semua file
COPY . .

# expose port
EXPOSE 3000

# jalankan app
CMD ["node", "server.js"]
