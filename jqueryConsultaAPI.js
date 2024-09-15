$(document).ready(function() {
    $('#consultarBtn').on('click', function() {
        const userId = $('#idPersona').val();

        if (userId < 1 || userId > 10) {
            alert("El ID debe estar entre 1 y 10");
            return;
        }

        $.ajax({
            url: `https://jsonplaceholder.typicode.com/users/${userId}`,
            method: 'GET',
            success: function(data) {
                $('#nombre').text(data.name);
                $('#correo').text(data.email);
            },
            error: function() {
                alert("Hubo un problema al consultar la API.");
            }
        });
    });
});