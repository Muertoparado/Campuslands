import { body } from "express-validator";

const id_camper = body("id_camper")
    .trim()
    .notEmpty()
    .withMessage("id_camper es requerido")
    .isNumeric()
    .withMessage("id_camper debe ser un número");

const nombre_camper = body("nombre_camper")
    .trim()
    .notEmpty()
    .withMessage("nombre_camper es requerido")
    .isString()
    .withMessage("nombre_camper debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("nombre_camper no debe tener más de 50 caracteres");

const foto_camper = body("foto_camper")
    .trim()
    .notEmpty()
    .withMessage("foto_camper es requerido")
    .isString()
    .withMessage("foto_camper debe ser una cadena de texto")
    .isLength({ max: 50 })
    .withMessage("foto_camper no debe tener más de 50 caracteres");

const cv = body("cv")
    .trim()
    .notEmpty()
    .withMessage("cv es requerido")
    .isString()
    .withMessage("cv debe ser una cadena de texto")
    .isLength({ max: 255 })
    .withMessage("cv no debe tener más de 255 caracteres");

const id_ruta = body("id_ruta")
    .trim()
    .notEmpty()
    .withMessage("id_ruta es requerido")
    .isNumeric()
    .withMessage("id_ruta debe ser un número");

const id_grupo = body("id_grupo")
    .trim()
    .notEmpty()
    .withMessage("id_grupo es requerido")
    .isNumeric()
    .withMessage("id_grupo debe ser un número");

const disponibilidad_viaje = body("disponibilidad_viaje")
    .notEmpty()
    .withMessage("disponibilidad_viajes requerido")
    .isBoolean()
    .withMessage("disponibilidad_viaje debe ser una boleano")
    

export const camperValidation = [
    id_camper,
    nombre_camper,
    foto_camper,
    cv,
    id_ruta,
    id_grupo,
    disponibilidad_viaje
];