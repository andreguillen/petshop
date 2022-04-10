const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');

const db = require('../database/models');
const User = require('../models/usersModel');

const usersControllers = {

    	perfil: (req, res) => {	
                res.render('users/perfil', {usuario: req.session.usuarioLogueado});
        },

        login: (req, res) => {
                res.render('users/login');
        },   

        crear_cuenta: (req, res) => {
                res.render('users/crear_cuenta');
        },

        procesoLogin: (req, res) => {

			db.Usuario.findOne({
				where: {
					email: req.body.email
				}
			})
				.then((usuarioLogin) =>{
					if(usuarioLogin) {
						let validarPassword = bcryptjs.compareSync(req.body.password, usuarioLogin.password);
						if (validarPassword == true) { //Cambiar a true cuando cuando esten hasheados los passwords
							delete usuarioLogin.password;
							req.session.usuarioLogueado = usuarioLogin;
		
							if(req.body.remember_user) {
								res.cookie('userEmail', req.body.email, { maxAge: (1000 * 60) * 60 })
							} //Opcion de recordar usuario
		
							return res.redirect('/users/perfil');
						} 
						return res.render('users/login', {
							errors: {
								email: {
									msg: 'Las credenciales son inválidas'
								}
							}
						});
					}
		
					return res.render('users/login', {
						errors: {
							email: {
								msg: 'No se encuentra este email en nuestra base de datos'
							}
						}
					});
				})
				.catch(function(error){
					console.log("No se encuentra este email en nuestra base de datos");
				})
		},

        procesoCrearCuenta: (req, res) => {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			console.log (resultValidation.errors);
			return res.render('users/crear_cuenta', {
				errors: resultValidation.array(),
				//oldData: req.body
			});
			
		}
		console.log(req.body.email);
		db.Usuario.findOne({
			where: {
				email: req.body.email
			}
		})
			.then((usuarioEnBD) =>{
				console.log(usuarioEnBD)
				if (usuarioEnBD) {
					return res.render('crear_cuenta', {
						errors: {
							email: {
								msg: 'Este email ya está registrado'
							}
						},
						oldData: req.body
					});
				}

				db.Usuario.create({
					name: req.body.name,
					lastName: req.body.lastName,
					email: req.body.email,
					telephone: req.body.telephone,
					password: bcryptjs.hashSync(req.body.password, 10),
					//image: //req.file.filename,
					type: req.body.type
				});
			})
			.catch(function(error){
				console.log("No se pudo crear el registro en la base de datos");
			})

			return res.redirect('/users/login');

		},

		logout: (req, res) => {
			res.clearCookie('userEmail');
			req.session.destroy();
			return res.redirect('/');
		},

		todosLosUsuarios: (req, res) => {
			let resultado = {
				link: "http://localhost:3001/API/todosLosUsuarios",
				cantidad: 0,
				data: []
			}

			db.Usuario.findAll()
				.then((totalDeUsuarios) => {
					if(totalDeUsuarios){
						for(let i = 0; i<totalDeUsuarios.length; i++){
							delete totalDeUsuarios[i].dataValues.password;
							resultado.data.push(totalDeUsuarios[i].dataValues);
						}
						//resultado.data = totalDeUsuarios.map(function(usuario){
						//	delete usuario.password;
						//	return;
						//});
						resultado.cantidad = totalDeUsuarios.length;				
						res.json(resultado);
					}
				})
				.catch(function(error){
					console.log("No se pudo acceder a la base de datos");
				})
		},

		usuarioPorId: (req, res) => {
			let resultado = {
				link: "http://localhost:3001/API/usuarioPorId",
				cantidad: 0,
				data: []
			}

			db.Usuario.findByPk(req.params.id)
				.then((usuario) => {
					if(usuario){
						delete usuario.dataValues.password;
						resultado.data.push(usuario.dataValues);
						resultado.cantidad = 1;
					}
					res.json(resultado);
				})
				.catch(function(error){
					console.log("No se pudo acceder a la base de datos");
				})
		},

		ultimoUsuario: (req, res) => {
			let resultado = {
				link: "http://localhost:3001/API/ultimoUsuario",
				cantidad: 0,
				data: []
			}

			db.Usuario.findAll({
				order: [['id','DESC']],
				limit: 1
			})
				.then((usuario) => {
					if(usuario){
						delete usuario[0].dataValues.password;
						resultado.data.push(usuario[0].dataValues);
						resultado.cantidad = 1;
					}
					res.json(resultado);
				})
				.catch(function(error){
					console.log("No se pudo acceder a la base de datos");
				})
		}
}


module.exports = usersControllers;