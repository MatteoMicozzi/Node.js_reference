const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
    log(msg) {
        // Call event
        this.emit('message', {id: uuid.v4(), msg});    // (msg) here is the same as (msg: msg)
    }
}

// module.exports = Logger;

// -------------------------------------------------------------------------------------------- //

// const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener', data));

logger.log('Hello World!');
logger.log('Hello Friend!');
logger.log('Hello Matteo!');
logger.log('Hello Mà!');