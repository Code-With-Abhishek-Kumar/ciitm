import pino from 'pino';
import PinoHttp from 'pino-http';

const logger = pino({
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
      colorizeObjects: true,
    },
  },
  level: 'info',
});

export default logger;
