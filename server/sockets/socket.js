const { io } = require('../server');

io.on('connection', (client) => {

    console.log('cliente contectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a nuestra aplicación'
    });


    client.on('disconnect', () => {
        console.log('usuario desconectado');
    });
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*         if (data.usuario) {
                    callback({ resp: 'todo salio bien!' });
                } else {
                    callback({ resp: 'todo salio MAL!!!!!!!!!!!!!!!!' });
                };
         */

    });
});