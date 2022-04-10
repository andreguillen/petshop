const fs = require('fs');
const path = require('path');

const db = require('../database/models');


const User = {

	buscarPorPK: function (id) {
		
		let usuarioEncontrado;

		db.Usuario.findByPk(id)
			.then((usuario) =>{
				usuarioEncontrado = usuario;
				return usuarioEncontrado;
			})
			.catch(function(error){
				
			})
	},

	buscarPorEmail: function (email) {
		
		let usuarioEncontrado;

		db.Usuario.findOne({
			where: {
				email: email
			}
		})
			.then((usuario) =>{
				usuarioEncontrado = usuario;
				return usuarioEncontrado;
			})
			.catch(function(error){
				return false;
			})
	},

	crear: function (userData) {
		
		db.Usuario.create({userData})
	},

	borrar: function (id) {
		let todosLosUsuarios = this.encontrarTodos();
		let usuariosDefinitivos = todosLosUsuarios.filter(unUsuario => unUsuario.id !== id);
		fs.writeFileSync(this.fileName, JSON.stringify(usuariosDefinitivos, null, ' '));
		return true;
	}
}

module.exports = User;