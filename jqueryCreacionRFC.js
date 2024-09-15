$(document).ready(function(){
    $('#generarRFCBtn').click(function(){
        // Capturar los valores del formulario
        var nombre = $('#nombre').val().toUpperCase();
        var apellidoPaterno = $('#apellido-paterno').val().toUpperCase();
        var apellidoMaterno = $('#apellido-materno').val().toUpperCase();
        var fechaNacimiento = $('#fecha-nacimiento').val();

        // Validar si los campos están completos
        if(nombre === "" || apellidoPaterno === "" || apellidoMaterno === "" || fechaNacimiento === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        // Procesar los datos para generar el RFC
        var rfc = generarRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento);

        // Mostrar el RFC generado
        $('#lbl-generacionRFC').text("El RFC generado es: " + rfc);
    });



    // Función para generar el RFC
    function generarRFC(nombre, apellidoPaterno, apellidoMaterno, fechaNacimiento) {
        // Lógica simple para generar el RFC
        var primerasDosLetrasApellidoPA = apellidoPaterno.substring(0,2);
        var primeraLetraApellidoMA = apellidoMaterno.substring(0,1);
        var primeraLetraNombre = nombre.substring(0,1);
        var fecha = fechaNacimiento.replace(/-/g, '').substring(2);
        var homoclaveFicticio = generarHomoclave();

        return primerasDosLetrasApellidoPA + primeraLetraApellidoMA + primeraLetraNombre + fecha + homoclaveFicticio;
    }

    function generarHomoclave() {
        var letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var numeros = '0123456789';

        var letra1 = letras.charAt(Math.floor(Math.random() * letras.length));
        var letra2 = letras.charAt(Math.floor(Math.random() * letras.length));

        var numero = numeros.charAt(Math.floor(Math.random() * numeros.length));

        return letra1 + numero + letra2;
    }
});
