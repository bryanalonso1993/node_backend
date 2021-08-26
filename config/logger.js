/**
 * Configuracion de logger
 * https://github.com/winstonjs/winston
 */

const { createLogger, format, transport, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

const timezoned = () => new Date();
const consoleTransport = [
    new transports.Console(),
    new transports.File({ filename: 'logError.log', level: 'error'}),
    new transports.File({ filename: 'logApplication.log', level: 'info'})
]

const logFormat = printf( (timestamp, level, label, message) => {
    return `${timestamp}|${label}|${level}|${message}`
});

const logger = createLogger({
    format: combine(
        label({ label: 'backend_node'}),
        timestamp({format: timezoned}),
        logFormat
    ),
    transports: consoleTransport,
})

module.exports = logger;