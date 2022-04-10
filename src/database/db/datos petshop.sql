
INSERT INTO `animal` (`id`, `typeAnimal`) VALUES
	(1, 'Perro'),
	(2, 'Gato');

INSERT INTO `categoria` (`id`, `typeCategory`) VALUES
	(1, 'Alimento Seco'),
	(2, 'Alimento Humedo'),
	(3, 'Cuidados y belleza'),
	(4, 'Cuchas y camas'),
	(5, 'Bandeja y material sanitario');

INSERT INTO `producto` (`id`, `name`, `price`, `discount`, `description`, `image`, `qty`, `createDate`, `removeDate`, `id_animal`, `id_categoria`) VALUES
	(1, 'Comedero - Bebedero Para Gato', 1350, 10, 'Comedero - bebedero para su gato', 'comedero_1.jpg', 20, '2021-09-17', NULL, 2, 2),
	(2, 'Fancy feast Goulash Atún', 118, 0, 'Producto elaborado con ingredientes de alta calidad, con texturas innovadoras y sabores únicos.', 'fancy.png', 30, '2020-05-22', NULL, 2, 2),
	(3, 'Litera Cerrada Catit Con Filtr', 7448, 15, 'El Arenero Cerrado Catit es una bandeja sanitaria que le da privacidad a tu gato mientras retiene los desechos y arena dentro del arenero.', 'litera.png', 5, '2021-09-09', NULL, 2, 5),
	(4, 'Royal Canin Medium Puppy', 2834, 10, 'Alimento balanceado completo para caninos cachorros de talla mediana (peso adulto entre 11 y 25 kg). De 2 a 12 meses de edad.', 'royal.jpg', 15, '2015-09-18', NULL, 1, 1);


INSERT INTO `usuario` (`id`, `name`, `lastName`, `email`, `telephone`, `password`, `image`, `type`) VALUES
	(1, 'Cosme', 'Fulanito', 'cosmefulanito@dh.com', '745835032', '$2a$10$kG6PgIzCaJ5LhmH5duvq9uWtjDuw.eZ3Azkgv3ot7IDiDvUQRnpUG', 'male.png', 1),
	(2, 'Fabiana', 'Gomez', 'fabi@gmail.com', '1133252627', '5duvq9uWtjDuw.eZ3Azkgv3ot7IDiDvUQRnpUG', 'female.png', 2);

