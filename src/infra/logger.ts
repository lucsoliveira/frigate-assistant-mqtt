import winston from 'winston';

const logger = winston.createLogger({
  level: 'debug',
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple(),
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

const LoggerWrapper = (functionCaller: string) => {
  const baseLogger = (type: string, message: string, payload?: object) => {
    return logger[type](
      `${functionCaller} - ${message} ${
        payload ? JSON.stringify(payload) : ''
      }`,
    );
  };

  return {
    warn: (message: string, payload?: object) =>
      baseLogger('warn', message, payload),
    info: (message: string, payload?: object) =>
      baseLogger('info', message, payload),
    debug: (message: string, payload?: object) =>
      baseLogger('debug', message, payload),
    error: (message: string, payload?: object) =>
      baseLogger('error', message, payload),
  };
};

export default LoggerWrapper;
