CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "alef vinicius",
    "test@gmail.com",
    26
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "gerso",
    "test@gmail.com",
    34
);

INSERT INTO usuarios(nome,email,idade) VALUES(
    "kadin",
    "test@gmail.com",
    88
);

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE idade = 34;

SELECT * FROM usuarios WHERE nome = "alef vinicius";

/*deleta todos os registros*/
DELETE FROM usuarios 

DELETE FROM usuarios WHERE nome = "victor";

/*altera todos os registros*/
UPDATE usuarios SET nome = "nome de teste"

UPDATE usuarios SET nome = "nome de teste" WHERE nome = "kadin";