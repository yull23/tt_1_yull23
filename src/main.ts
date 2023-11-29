import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import * as morgan from 'morgan';
// import * as morgan from 'morgan';
import { AppModule } from './app.module';
import { CORS } from './config/constants';
import { configureErrorLogging } from './config/loggin-erros.config';
import { configureNormalLogging } from './config/login-normal.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // START: Setting application prefix
  app.setGlobalPrefix('api/v1');
  // END: Setting application prefix

  // START: Configuring CORS for application access
  app.enableCors(CORS);
  // END: Configuring CORS for application access

  // START: Configuring CORS for application access
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  // END: Configuring CORS for application access

  // START: Printing and writing configuration of errors and logs.
  configureNormalLogging(app, configService);
  configureErrorLogging(app, configService);
  app.use(morgan('dev'));

  // END: Printing and writing configuration of errors and logs.

  // console.log('Application running on: ' + (await app.getUrl()));
  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
