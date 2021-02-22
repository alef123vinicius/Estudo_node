CREATE USER 'smarkio' IDENTIFIED BY 'smarkio';

GRANT ALL PRIVILEGES ON *.* TO 'smarkio'@'%' WITH GRANT OPTION;

ALTER user 'smarkio'@'%' IDENTIFIED WITH mysql_native_password BY 'smarkio';

/* somente para um database específico
GRANT ALL PRIVILEGES ON *database.table* TO 'smarkio'@'%' WITH GRANT OPTION;
*/
/* check new user
SELECT user FROM mysql.user;
*/