#1 npn install (para instalar as dependencias)

#2 dados do banco Mysql
    host: 'localhost',
    user:  'brenodev',
    password: '123456',
    database: 'crud',

#3 abra o cmd (copie e colo o code abaixo)
mysql -h localhost -u root -p

#4 colocar senha root mysql

#5 criar usuario com comando abaixo (copie e colo o code abaixo)
CREATE USER 'brenodev'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'

#6 dar permissão ao usuario 'brenodev' com comando abaixo (copie e colo o code abaixo)
GRANT ALL PRIVILEGES ON *.* TO 'brenodev'@'localhost'

#7 Criar a base de dados crud com comando abaixo (copie e colo o code abaixo)
CREATE DATABASE crud

#8 Criar a tabela 'nome_cliente_table' com comando abaixo (copie e colo o code abaixo)
CREATE TABLE `crud`.`nome_cliente_table` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome_cliente` VARCHAR(45) NOT NULL,
  `email_cliente` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

#9 digite o comando abaixo dentro da pasta 'BACK-END-API'
node index.js

#10 'servidor rodando na porta 3001' back-end em funcionameto =D
