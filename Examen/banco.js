

var Persona = function(nombre, correo, telefono, noCuenta, tipoCliente){
    this.nombre = nombre;
    this.correo = correo; 
    this.telefono = telefono;
    this.noCuenta = noCuenta;
    this.tipoCliente = tipoCliente; 
}




function operacionesDeBolsa(){

    document.getElementById("name").innerHTL ="";

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var noCuenta = document.getElementById("cuenta").value;
    var tipo = document.getElementById("cliente").value;
    var inver = document.getElementById('inversion').value;

    var formaDePago = document.getElementById("tipoInversion").checked ? "Dollar" : "Acciones";

 
}

var tipo = function(tipo){

	var moneda = 0;
	var cantidad = 0;

	if (tipo = 'regular') {
		moneda = 22;
	}
	else if (tipo = 'inversor') {
		moneda = 20;
	}
	else if (tipo = 'empleado') {
		moneda = 17;
	}

	return cantidad;
}


Persona.prototype.inversion = function(inver){

	var descuento = 0;

	if(inver>=1000 & < 2000){
		 descuento = inver - (inver*.3);
	}
	else if (inver>=2000){
		 descuento = inver - (inver*.5);
	}

	return descuento;
}