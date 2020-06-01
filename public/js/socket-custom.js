var socket = io();

//escucha
socket.on('connect', function() {
    console.log('conectado al servidor');
});


socket.on('enviarMensaje', function(mensaje) {
    console.log('Desde el servidor:', mensaje);
});

socket.on('disconnect', function() {
    console.log('perdimos conexion al servidor');
});


//envia
socket.emit('enviarMensaje', {
    usuario: 'Marcelo',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server', resp);
});