


var Datos = function(tipoCliente, tipoInversion, inver){

    this.tipoCliente = tipoCliente;
    this.tipoInversion = tipoInversion;
    this.inver = inver;
}

var resultados = function(){
    Datos.call(this,tipoInversion,tipoInversion,inver);

 var res = 0;
    var moneda = 0;
    var acciones = 0;

    if (this.tipoCliente = 'Cliente') {moneda=22;}
        else if (this.tipoCliente = 'Inversor') {moneda=20;}
            else if (this.tipoCliente = 'Empleado') {moneda=17;}

    if (this.tipoInversion='Dollar') {
        acciones = this.inver*moneda;
    }
    else{acciones=this.inver;}


    if(acciones>=1000 & acciones<2000){
        res = acciones-(acciones*.3)
    }
    else if(acciones>2000){
        res = acciones-(acciones*.5)
    }

    return res;
    console.log('La inversión fue de: ' + res);
    
    
}

var variables = function(){

var nombre = document.getElementById("nombre").value;
var correo = document.getElementById("correo").value;
var telefono = document.getElementById("telefono").value;
var noCuenta = document.getElementById("cuenta").value;
var tipoCliente = document.getElementById("cliente").value;
var tipoInversion = document.getElementById('tipoInversion').value;
var inver = document.getElementById('inversion').value;

console.log(nombre,correo,telefono,noCuenta,tipoCliente,tipoInversion,inver,montoInversion);


}
/*



   
        var montoInversion = document.getElementById('montoInversion').value;


console.log(montoInversion);
var montoInversion = document.getElementById('montoInversion').value;

*/
















