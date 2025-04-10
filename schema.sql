CREATE SCHEMA grupo3_prog2;

USE grupo3_prog2;

CREATE TABLE usuarios (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(500) NOT NULL UNIQUE,
    usuario VARCHAR(500) NOT NULL UNIQUE,
    contrasena VARCHAR(500) NOT NULL,
    foto_perfil VARCHAR(500) NULL UNIQUE,
    documento INT UNSIGNED,
    fecha_nacimiento DATE NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP
  );
   
  INSERT INTO usuarios (id, email, usuario, contrasena, foto_perfil, documento, fecha_nacimiento)
  VALUES (1, "orianasabatini@gmail.com", "ori_sabatini", "dybala", "/images/users/oriana.jpg", 43820583, "2000-11-08");
  INSERT INTO usuarios (id, email, usuario, contrasena, foto_perfil, documento, fecha_nacimiento)
  VALUES (2, "catagoyanarte@gmail.com", "cgoyanarte", "sporty", "/images/comentarios/CGoyanarte.jpg", 47090878, "2006-01-14");
  INSERT INTO usuarios (id, email, usuario, contrasena, foto_perfil, documento, fecha_nacimiento)
  VALUES (3, "mjudezrivas@yahoo.com", "manujudez", "blonded", "/images/comentarios/MJudez.jpg", 47170932, "2006-03-02");
  INSERT INTO usuarios (id, email, usuario, contrasena, foto_perfil, documento, fecha_nacimiento)
  VALUES (4, "milagrosg@gmail.com", "mili_galarce", "saturn", "/images/comentarios/MGalarce.jpg", 47090878, "2005-08-31");
  INSERT INTO usuarios (id, email, usuario, contrasena, foto_perfil, documento, fecha_nacimiento)
  VALUES (5, "oliviarodrigo@yahoo.com", "olirodrigo", "soamerican", "/images/comentarios/ORodrigo.jpg", 45184082, "2004-07-18");
  
  CREATE TABLE productos (
    id_producto INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(500) NOT NULL,
    foto_producto VARCHAR(500) NULL,
    descripcion VARCHAR(500),
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
  );
  
  INSERT INTO productos (id_producto, nombre, foto_producto, descripcion, id_usuario)
  VALUES (1, "Pride and Practice", "/images/products/libro1.jpg", "Romance contemporáneo, orgullo, prejuicios, identidad, amor, familia, crecimiento, conflicto, diversidad.", 1);
  INSERT INTO productos (id_producto, nombre, foto_producto, descripcion, id_usuario)
  VALUES (2, "Alls fair in love and poetry", "/images/products/libro2.jpg", "Éxito musical, evolución artística, empoderamiento, fama, letras, giras, impacto, fans.", 2);
  INSERT INTO productos (id_producto, nombre, foto_producto, descripcion, id_usuario)
  VALUES (3, "Frankestein", "/images/products/libro3.jpg", "Ciencia, ambición, creación, monstruo, culpa, soledad, rechazo, venganza, horror, humanidad.", 3);
  INSERT INTO productos (id_producto, nombre, foto_producto, descripcion, id_usuario)
  VALUES (4, "Little Woman", "/images/products/libro4.jpg", "Hermanas, crecimiento, familia, amor, sueños, guerra, arte, sacrificio, independencia, esperanza.", 4);
  INSERT INTO productos (id_producto, nombre, foto_producto, descripcion, id_usuario)
  VALUES (5, "Letters of Jane Austin", "/images/products/libro5.jpg", "Correspondencia, intimidad, observación, ingenio, sociedad, familia, escritura, emociones, rutina, época.", 4);
  INSERT INTO productos (id_producto, nombre, foto_producto, descripcion, id_usuario)
  VALUES (6, "The Romance of Royalty", "/images/products/libro6.jpg", "Amor, poder, deber, escándalo, tradiciones, pasiones, secretos, nobleza, alianzas, destino.", 5);
  INSERT INTO productos (id_producto, nombre, foto_producto, descripcion, id_usuario)
  VALUES (7, "The Secret Garden", "/images/products/libro7.jpg", "Jardín, amistad, sanación, descubrimiento, naturaleza, infancia, pérdida, esperanza, magia, transformación.", 1);
  INSERT INTO productos (id_producto, nombre, foto_producto, descripcion, id_usuario)
  VALUES (8, "Love finds the way", "/images/products/libro8.jpg", "Amor, obstáculos, coraje, superación, destino, esperanza, sacrificio, pasión, crecimiento, redención.", 3);
  INSERT INTO productos (id_producto, nombre, foto_producto, descripcion, id_usuario)
  VALUES (9, "Fairytales and Stories", "/images/products/libro9.jpg", "Magia, fantasía, lecciones, aventuras, criaturas, sueños, inocencia, misterio, valores, imaginación.", 4);
  INSERT INTO productos (id_producto, nombre, foto_producto, descripcion, id_usuario)
  VALUES (10, "The Bird", "/images/products/libro10.jpg", "Libertad, vuelo, naturaleza, canto, belleza, símbolo, soledad, instinto, paz, observación.", 4);
  
  CREATE TABLE comentarios (
    id_comentario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    texto VARCHAR(500) NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    deletedAt TIMESTAMP NULL ON UPDATE CURRENT_TIMESTAMP,
    id_producto INT UNSIGNED,
    FOREIGN KEY (id_producto) REFERENCES productos(id_producto),
    id_usuario INT UNSIGNED,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id)
  );
  
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (1, "Recomiendo!", 1, 2);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (2, "Muy buen servicio.", 1, 5);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (3, "Super interesante.", 1, 4);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (4, "Se lo recomendare a todos mis amigos :)", 2, 1);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (5, "Muy buenooo", 2, 2);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (6, "El libro llego en perfectas condiciones.", 2, 3);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (7, "5 estrellas!", 3, 3);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (8, "La trama es adictiva", 3, 5);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (9, "Completamente atrapante..", 3, 1);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (10, "Muy recomendado", 4, 4);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (11, "¡Excelente compra!", 4, 1);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (12, "Ideal para adolescentes.", 4, 2);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (13, "Sin duda, volveré a comprar aquí.", 5, 5);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (14, "Me encanto :)", 5, 3);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (15, "Perfecto para mantener el interés de los lectores jóvenes.", 5, 2);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (16, "Estoy muy feliz con mi compra.", 6, 1);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (17, "¡Recomendado!", 6, 3);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (18, "Definitivamente un nuevo favorito.", 6, 4);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (19, "Una historia que te atrapa desde el principio.", 7, 2);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (20, "Tardó un poco en llegar. Aún así, vale la pena.", 7, 5);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (21, "Muy interesante.", 7, 1);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (22, "Volvere a comprar aqui!", 8, 1);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (23, "Me hizo reflexionar sobre muchas cosas.", 8, 2);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (24, "Excelente servicio y me encantó el libro que compré.", 8, 3);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (25, "Definitivamente lo volvere a leer", 9, 4);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (26, "Muy bueno!", 9, 2);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (27, "Increible, tanto el servicio como el producto.", 9, 5);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (28, "Totalmente recomendado.", 10, 1);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (29, "Excelente!", 10, 3);
  INSERT INTO comentarios (id_comentario, texto, id_producto, id_usuario)
  VALUES (30, "Super interesante.", 10, 5);
