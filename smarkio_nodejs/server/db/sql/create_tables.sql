USE smarkio;

CREATE TABLE comentarios (
    id INT NOT NULL AUTO_INCREMENT,
    comentario VARCHAR(250),
    PRIMARY KEY (id)
);

/*
INSERT INTO comentarios (comentario) VALUES ('O primeiro comentário');
UPDATE comentarios SET comentario = 'Alterei o comentario' Where id = 1;
DELETE FROM comentarios WHERE id = 1;
SELECT * FROM comentarios;
SELECT * FROM comentarios where id = 1;
*/