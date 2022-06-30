const { body } = require('express-validator');
const path = require("path");


const validacionesProductosEdit = [
    body("name")
        .notEmpty().withMessage("Debes introducir un producto")
        .isLength({min:5}).withMessage("Debes introducir un nombre mas largo"),
    
    body("brand")
        .notEmpty().withMessage("Debes introducir una marca"),
    
    body("size")
        .notEmpty().withMessage("Debes introducir un tamaño"),

    body("years")
        .custom((value) => {
            if (value) {
                if ((value.length != 4) && (value != "")) {
                    throw new Error('Debes introducir un año correcto Ej: 2003');
                }

            } 
            return true;
        }),

    body("priceUnit")
        .notEmpty().withMessage("Debes introducir un precio"),

    body("priceCant")
        .notEmpty().withMessage("Debes introducir un precio por cantidad"),

    body("cantDisc")
        .notEmpty().withMessage("Debes introducir una cantidad para el descuento"),

    body("graduation")
        .notEmpty().withMessage("Debes introducir la graduacion del producto"),

    body("description")
        .notEmpty().withMessage("Debes introducir uns descripción")
        .isLength({min:20}).withMessage("Debes introducir una descripción mas larga"),

    body('image')
        .custom((value, { req }) => {
            let file = req.file;
            let extensionesValidas = ['.jpg', '.png', '.gif'];

            if (file) {
                let fileExtension = path.extname(file.originalname);
                if (!extensionesValidas.includes(fileExtension)) {
                    throw new Error(`Las extensiones de imagen permitidas son: ${extensionesValidas.join(', ')}`);
                }
            }
            return true;
        })
        .custom((value, { req }) => {
            let file = req.file
            if (file) {
                let tamaño = file.size
                if (parseInt(tamaño) > 1000000) {
                    throw new Error('El tamaño de imagen maximo permitido es de 1MB');
                }
            }
            return true;
        })
]

module.exports = validacionesProductosEdit;