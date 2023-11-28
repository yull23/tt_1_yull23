import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as fs from 'fs';
import * as morgan from 'morgan';
import * as path from 'path';

export function configureNormalLogging(
  app: INestApplication,
  configService: ConfigService,
): void {
  morgan.token('type', function (req) {
    return req.headers['content-type'];
  });

  const rootPath = path.resolve(__dirname, '../..');

  // Logs normales
  if (configService.get('LOG_REQ_TO_FILE')) {
    const logFilePath = path.join(rootPath, 'src', 'records', 'access.log');
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
