const productsController = require('./../controllers/productsController');
const usersControllers = require('../controllers/usersControllers');
const express = require('express');
const router = express.Router();
var cors = require('cors')


var corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}


router.get('/todosLosUsuarios',cors(corsOptions),usersControllers.todosLosUsuarios);

router.get('/usuarioPorId/:id',usersControllers.usuarioPorId);

router.get('/ultimoUsuario',cors(corsOptions), usersControllers.ultimoUsuario);

router.get('/todosLosProductos',cors(corsOptions),productsController.todosLosProductos);

router.get('/todasLasCategorias',cors(corsOptions),productsController.todasLasCategorias);

router.get('/productoPorId/:id',productsController.productoPorId);

router.get('/cantidadProductosPorCategoria', cors(corsOptions), productsController.cantidadProductosPorCategoria);

router.get('/ultimoProducto', cors(corsOptions), productsController.ultimoProducto);

module.exports = router;