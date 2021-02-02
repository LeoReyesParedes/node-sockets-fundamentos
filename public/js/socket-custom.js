var socket = io();

socket.on('connect', function(){
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conección con el servidor');
});

// emit => enviar información
socket.emit('enviarMensaje', {
    usuario: 'Leo',
    mensaje: 'Hola mundo'
}, function(resp){
    console.log('Respuesta server: ', resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});