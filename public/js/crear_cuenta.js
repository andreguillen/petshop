const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');
//const msgexito = document.getElementById('#formulario__mensaje-exito')

 const expresiones = {
	user: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	lastName: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telephone: /^\d{7,14}$/ // 7 a 14 numeros.
} 

 const campos = {
	
	name: false,
	lastName: false,
	password: false,
	email: false,
	telephone: false
} 

const validarFormulario = (e) => {

	var controlId = e.target.name
	controlId=controlId.concat("_check")

	var parrafoId = e.target.name
	parrafoId=parrafoId.concat("_msg")

	//parrafoId = ("mensaje_check") 
	var mensaje = document.getElementById(parrafoId)
	mensaje.style.opacity=0
	if(e.target.value.length<0){
		mensaje.style.opacity=1
	}
	
	var componente = document.getElementById(controlId)
	componente.style.opacity=0
	if (e.target.value.length>0){
		componente.style.opacity=1
	}
	
	if(expresiones[e.target.name].test(e.target.value)){
		
		componente.classList.remove('fa-times-circle');		
		componente.classList.add('fa-check-circle');
		componente.style.color = "#1ed12d"; 
		mensaje.style.opacity=0	
		//campos=true;	
		campos[e.target.name]=true; 
	
	}else{
		componente.classList.add('fa-times-circle');
		componente.style.color = "#bb2929"; //incorrecto color rojo		
		componente.classList.remove('fa-check-circle');
		mensaje.style.opacity=1
		//campos=false;	
		campos[e.target.name]=false;
		
	}
	
}

inputs.forEach((input) => {
    input.addEventListener('keyup', () => {
    input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
    })
}) 

 formulario.addEventListener('submit', (e) => {	
	e.preventDefault();
	if(campos.name && campos.lastName && campos.email && campos.telephone && campos.password){

		document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo');
		}, 5000);
		document.querySelectorAll('.fa-check-circle').forEach((icono) => {
			icono.classList.remove('fa-check-circle');
		});

		formulario.submit();
		
		formulario.reset();

		}else {
		document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
		setTimeout(() => {
			document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
		}, 5000);

	}
});
