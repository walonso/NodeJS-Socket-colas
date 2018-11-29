//Comando para establecer la conexion

var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', (client) => {
    console.log('Conectado al servidor');
})

socket.on('disconnect', (client) => {
    console.log('Desconectado del servidor');
})


socket.on('estadoActual', (resp) => {
    label.text(resp.actual);
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
            label.text(siguienteTicket);
        })
        //console.log('click');
})