INSERT INTO `grupo` (`nombre_grupo`) VALUES
('Grupo A'),
('Grupo B'),
('Grupo C'),
('Grupo D'),
('Grupo E');

-- Datos para la tabla `ruta`
INSERT INTO `ruta` (`nombre_ruta`) VALUES
('Ruta 1'),
('Ruta 2'),
('Ruta 3'),
('Ruta 4'),
('Ruta 5');

-- Datos para la tabla `empresa`
INSERT INTO `empresa` (`nombre_empresa`, `area_empresa`, `descripcion_empresa`) VALUES
('Empresa 1', 'Tecnología', 'Descripción de Empresa 1'),
('Empresa 2', 'Salud', 'Descripción de Empresa 2'),
('Empresa 3', 'Educación', 'Descripción de Empresa 3'),
('Empresa 4', 'Finanzas', 'Descripción de Empresa 4'),
('Empresa 5', 'Servicios', 'Descripción de Empresa 5');

-- Datos para la tabla `oferta`
INSERT INTO `oferta` (`id_empresa`, `id_ruta`, `titulo_oferta`, `descripcion_oferta`, `jornada_oferta`, `sueldo_oferta`) VALUES
(1, 1, 'Oferta 1', 'Descripción de Oferta 1', 'Tiempo completo', 50000.00),
(2, 2, 'Oferta 2', 'Descripción de Oferta 2', 'Medio tiempo', 35000.00),
(3, 3, 'Oferta 3', 'Descripción de Oferta 3', 'Tiempo completo', 60000.00),
(4, 4, 'Oferta 4', 'Descripción de Oferta 4', 'Tiempo completo', 45000.00),
(5, 5, 'Oferta 5', 'Descripción de Oferta 5', 'Medio tiempo', 40000.00);

-- Datos para la tabla `campers`
INSERT INTO `campers` (`id_camper`, `nombre_camper`, `foto_camper`, `cv`, `id_ruta`, `id_grupo`, `disponibilidad_viaje`) VALUES
(1, 'Camper 1', 'foto1.jpg', 'CV de Camper 1', 1, 1, true),
(2, 'Camper 2', 'foto2.jpg', 'CV de Camper 2', 2, 2, false),
(3, 'Camper 3', 'foto3.jpg', 'CV de Camper 3', 3, 3, true),
(4, 'Camper 4', 'foto4.jpg', 'CV de Camper 4', 4, 4, false),
(5, 'Camper 5', 'foto5.jpg', 'CV de Camper 5', 5, 5, true);

-- Datos para la tabla `estado`
INSERT INTO `estado` (`nombre_estado`) VALUES
('Pendiente'),
('Aprobado'),
('Rechazado');

-- Datos para la tabla `estadoSolicitud`
INSERT INTO `estadoSolicitud` (`id_camper`, `id_oferta`, `id_estado`, `observacion`) VALUES
  (1, 1, 1, 'En espera de revisión'),
  (2, 2, 2, 'Aceptado para entrevista'),
  (3, 3, 3, 'Rechazado por falta de experiencia'),
  (4, 4, 1, 'En revisión preliminar'),
  (5, 5, 2, 'Aceptado para prueba práctica');