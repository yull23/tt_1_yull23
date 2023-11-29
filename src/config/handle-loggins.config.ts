import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as path from 'path';
import * as winston from 'winston';

export function configureLogging(
  app: INestApplication,
  configService: ConfigService,
): void {
  const rootPath = path.resolve(__dirname, '../..');

  const logger = winston.createLogger({
    transports: [
      new winston.transports.File({
        level: 'info',
        filename: path.join(rootPath, 'src', 'records', 'info.log'),
      }),
      new winston.transports.File({
        level: 'debug',
        filename: path.join(rootPath, 'src', 'records', 'debug.log'),
      }),
      new winston.transports.File({
        level: 'warn',
        filename: path.join(rootPath, 'src', 'records', 'warn.log'),
      }),
      new winston.transports.File({
        level: 'error',
        filename: path.join(rootPath, 'src', 'records', 'error.log'),
      }),
    ],
  });

  // lOgs

  if (configService.get('LOG_REQ_TO_FILE')) {
    const logFilePath = path.join(rootPath, 'src', 'records', 'access.log');
    logger.add(new winston.transports.File({ filename: logFilePath }));
  } else {
    logger.add(new winston.transports.Console());
  }

  if (configService.get('LOG_ERR_TO_FILE')) {
    const errorLogFilePath = path.join(rootPath, 'src', 'records', 'error.log');
    logger.add(
      new winston.transports.File({
        level: 'error',
        filename: errorLogFilePath,
      }),
    );
  } else {
    logger.add(new winston.transports.Console({ level: 'error' }));
  }

  // Middleware
  app.use((req, res, next) => {
    logger.info(`Request: ${req.method} ${req.url}`);
    next();
  });

  app.use((err, req, res, next) => {
    logger.error(`Error: ${err.message}`, err);
    next(err);
  });
}
