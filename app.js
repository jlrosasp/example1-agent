'use strict'

const EventEmitter = require('events')

class Agent extends EventEmitter {
    constructor(opts) {
        super()

        this._options = opts
        this._started = false
        this._timer = null
    }

    connect() {
        if (!this._started) {
            this._started = true
            this.emit('connected')
            const opts = this._options
            this._timer = setInterval(() => {
                this.emit('agent-message', 'This is a Message')
            }, opts.interval)
        }
    }
    disconnect() {
        if (this._started) {
            clearInterval(this._timer)
            this._started = false
            this.emit('disconnected')
        }
    }
}


// Connect Agent
let agent = new Agent({
    interval: 2000
})
agent.connect();
// Events Listeners
agent.on('agent-message', payload => console.log(payload))
// Disconnect Agent 20 Seconds After
setTimeout(() => agent.disconnect(), 20000)

var persona = {
    nombre: 'Jose Luis',
    apellido: 'Rosas Peimbert'
}

console.log(persona);
suma()


function suma() {
    return 0;
}