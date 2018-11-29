const { io } = require('../server')
const { TicketControl } = require('../classes/ticket-control')

const ticketControl = new TicketControl();
//este se disprara cuando se conecta alguien (a lo que tenemos en el index.html)
io.on('connection', (client) => {

    client.on('siguienteTicket', (data, callback) => {
        let siguiente = ticketControl.siguiente();
        console.log(siguiente);
        callback(siguiente);
    });

    client.emit('estadoActual', {
        actual: ticketControl.getUltimoTicket()
    })

});