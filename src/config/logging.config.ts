import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as morgan from 'morgan';
import * as path from 'path';

export function configureLogging(
  app: INestApplication,
  configService: ConfigService,
): void {
  morgan.token('type', function (req) {
    return req.headers['content-type'];
  });

  const rootPath = path.resolve(__dirname, '../..');

  //
  app.use(
    morgan(
      ':method :url :status :res[content-length] - :response-time ms :date[web] :type',
    ),
  );

  // Configuración del log de errores
  if (configService.get('LOG_ERR_TO_FILE')) {
    const errorLogFilePath = path.join(rootPath, 'src', 'records', 'error.log');

    app.use(
      morgan('dev', {
        stream: fs.createWriteStream(errorLogFilePath, { flags: 'a' }),
        skip: (_, res) => res.statusCode < 400,
      }),
    );
  } else {
    app.use(
      morgan('dev', {
        stream: process.stderr,
        skip: (_, res) => res.statusCode < 400,
      }),
    );
  }

  // Logs normal
  if (configService.get('LOG_REQ_TO_FILE')) {
    const logFilePath = path.join(rootPath, 'src', 'records', 'access.log');
    console.log(logFilePath);

    const logStream = fs.createWriteStream(logFilePath, { flags: 'a' });
    app.use(
      morgan(
        ':method :url :status :res[content-length] - :response-time ms :date[web] :type',
        {
          stream: logStream,
        },
      ),
    );
  } else {
    app.use(
      morgan(
        ':method :url :status :res[content-length] - :response-time ms :date[web] :type',
      ),
    );
  }
}
