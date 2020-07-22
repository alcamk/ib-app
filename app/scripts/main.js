var getDatosPersonales = function(){
    
    var name = document.getElementById('name').value;
    var name2 = document.getElementById('name2').value;
    var apellidoPaterno = document.getElementById('apellidoPaterno').value;
    var apellidoMaterno = document.getElementById('apellidoMaterno').value;
    var celular = document.getElementById('celular').value;
    var edad = document.getElementById('edad').value;
    var estatura = document.getElementById('estatura').value;
    var peso = document.getElementById('peso').value;
    var motivoDeConsulta = document.getElementById('motivoDeConsulta').value;

    console.log(name,name2,apellidoPaterno,apellidoMaterno,celular,edad,estatura,peso,motivoDeConsulta);
}