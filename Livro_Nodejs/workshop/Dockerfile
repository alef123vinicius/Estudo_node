FROM  mongo

VOLUME /mongodata:/data/db

EXPOSE 27017:27017

# comandos para executar dentro do container

# docker exec -it mongodb mongo admin

# db.createUser({ user: "root", pwd: "root", roles: [{ role: "userAdminAnyDatabase", db: "admin"}]})

# db.auth("root", "root")

# use database

# db.createUser({ user: "nodejs", pwd: "a1a2a3a4", roles: ["readWrite", "dbAdmin"] })