const {io} = require('../server')

io.on('connection', (client) => {
    console.log('Usuario conectado')

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido! :)'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado')
    })

    // Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data)

        // enviamos a todos los usuarios
        client.broadcast.emit('enviarMensaje', data)

        // if(mensaje.usuario){
        //     callback({
        //         ok: true
        //     })
        // }else{
        //     callback({
        //         ok: false
        //     })
        // }
    })
})