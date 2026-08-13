const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        // You can add other transports like File, HTTP, etc.
    ],
});

module.exports = logger;

// Usage Example:
// const logger = require('./logger');
// logger.info('This is an info message');
// logger.error('This is an error message');
