const productsController = require('./../controllers/productsController');
const path = require('path');
const express = require('express');
const router = express.Router();
const multer = require('multer');
const {body}= require ('express-validator');
const validateCreate= [
    body ('name').notEmpty().withMessage("Campo obligatorio"),
    body ('price').notEmpty().withMessage("Campo obligatorio"),
    body ('discount').notEmpty().withMessage("Debe completar este campo y sino 0"),
    body ('description').notEmpty().withMessage("Completar este campo"),
    body ('qty').notEmpty().withMessage("Ingresé la cantidad"),
]




//***  Multer configuration  ****/

const configuracionImagen = multer.diskStorage({
    destination: function(req, file, cb) {       // request, archivo y callback que almacena archivo en destino
     cb(null, path.join(__dirname,'../../public/img'));    // Ruta donde almacenamos el archivo/en este caso en una carpeta productos dentro de imagenes
    },
    filename: function(req, file, cb) {          // request, archivo y callback que almacena archivo en destino
     let imageName =  Date.now() + file.originalname ;   // milisegundos y extensión de archivo original
     cb(null, imageName);         
    }
});


const uploadFile = multer({ storage: configuracionImagen });



router.get('/detail/:id',productsController.detalle_producto);  //products/:id cambio por comentario de jero al final de la clase

router.get('/create', productsController.crear_producto); //products/create
router.post('/create', uploadFile.single('imageProduct'), validateCreate, productsController.store); 

router.get('/edit/:id', productsController.editar_producto); //products/:id/edit cambio por comentario de jero al final de la clase
router.put('/edit/:id', validateCreate, productsController.update); //products/:id cambio por comentario de jero al final de la clase

router.delete('/edit/:id',productsController.destroy); //products/:id cambio por comentario de jero al final de la clase
//router.delete('/:id', productsController.destroy); ver la ruta, así está en el proyecto de Jero 

router.get('/',productsController.listado_producto); //products 




module.exports = router;

/*/*** EDIT ONE PRODUCT ***/ 
//router.get('/edit/:id', productsController.edit); 
//router.put('/edit/:id', productsController.update); 
