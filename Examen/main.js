var resultado = function(){

    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var telefono = document.getElementById("telefono").value;
    var noCuenta = document.getElementById("cuenta").value;
    var tipoCliente = document.getElementById("cliente").value;
    var tipoInversion = document.getElementById('tipoInversion').value;
    var inver = document.getElementById('inversion').value;
    
    /*var calculo = function(){
        var cal = console.log('tamo adentro de la function');
        return cal;
    }
    calculo();*/

    var transCliente = { //object
        name: nombre,
        email: correo,
        phone: telefono,
        acount: noCuenta,
        typeC: tipoCliente,
        typeI: tipoInversion,
        investment: inver 
    }
    //console.log('Los datos del cliente son: ' + datosCliente);

    var transaccion = function(){

    
        var res = 0;
        var moneda = 0;
        var acciones = 0;
        var descuento = 0;
    
        if (tipoCliente === 'Cliente') {moneda=22;}
            else if (tipoCliente === 'Inversor') {moneda=20;}
                else if (tipoCliente === 'Empleado') {moneda=17;}
        console.log(moneda);

        if (tipoInversion==='Dollar') {
            acciones = inver/moneda;
            console.log('Tus Dlls son: ' + acciones + ' acciones');
        }
        else{
            acciones=inver*moneda;
            console.log('Tus acciones son: ' + acciones + ' Dlls');
            acciones=acciones/moneda;
        }
        
    
        if(acciones>=1000 & acciones<2000){

            var dllAgain = acciones*moneda; 
            var des = dllAgain - (dllAgain*.03);
            res = acciones;
            descuento = dllAgain*.03;

            console.log('Pagaste: ' + dllAgain + ' en Dlls, tu descuento es de: ' + descuento + ' dlls')
            console.log('Tu pago con descuento es de: ' + des);
            console.log('Tus acciones son: ' + res); 
        }
        else if(acciones>=2000){
            var dllAgain = acciones*moneda; 
            var des = dllAgain - (dllAgain*.05);
            res = acciones;
            descuento = dllAgain*.05;

            console.log('Pagaste: ' + dllAgain + ' en Dlls, tu descuento es de: ' + descuento + ' dlls')
            console.log('Tu pago con descuento es de: ' + des);
            console.log('Tus acciones son: ' + res); 
        }
        return descuento;
    }


    var descount = transaccion();
    var datosCliente = [nombre,correo,telefono,noCuenta,tipoCliente,tipoInversion,inver,descount];//array

    console.log(datosCliente);

    return datosCliente;
    
}
