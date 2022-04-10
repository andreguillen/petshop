const fs = require('fs');
const path = require('path');
//const {validationResult} = require('express-validator');
const db = require('../database/models');
const Sequelize = require('sequelize');

const mainControllers = 
{
    	index: (req, res) => {	
            let lastFour;
            db.Producto.findAll({
                order: [['id','DESC']],
				limit: 4
            }) //leo los productos de la bd
                .then((todosLosProdcutos) =>{
                    lastFour = todosLosProdcutos;
                    res.render('index',{novedades: lastFour}); //saca los ultimos 4 productos para mostrarlos como novedad
                })
                .catch(function(error){
                    console.log(error);
                }) 
                
        },

        carrito: (req, res) => {	
            res.render('carrito',);
    }

}

module.exports = mainControllers;