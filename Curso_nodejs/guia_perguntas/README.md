npm init
npm install express --save
npm install ejs --save
npm install --save sequelize
npm install --save mysql2
### deprecated
npm install body-parser --save
npm remove body-parser

### para iniciar a aplciação com recurso de atualização 
nodemon

### dockerfile for mysql 

FROM mysql:latest
VOLUME [ "/var/lib/mysql", "/var/lib/mysql"]
EXPOSE 3306 33060
ENV MYSQL_ROOT_PASSWORD=a1a2a3a4

mysql -u root -h 172.17.0.2 -P 3306 -p

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'a1a2a3a4';