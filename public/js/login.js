function valida(){
    var email = document.getElementById("email");
    var pass = document.getElementById("contraseña");
    
    if((email.value == "")||(pass.value == "")){
    window.alert("Los campos email y contraseña no pueden estar vacios");
    }else{
    envia('/login.ejs');
    }
    }