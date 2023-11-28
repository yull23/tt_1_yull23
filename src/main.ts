import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CORS } from './config/constants';
import { configureLogging } from './config/logging.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // START: Setting application prefix
  app.setGlobalPrefix('api/v1');
  // END: Setting application prefix

  // START: Configuring CORS for application access
  app.enableCors(CORS);
  // END: Configuring CORS for application access

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );
  configureLogging(app, configService);

  // console.log('Application running on: ' + (await app.getUrl()));
  await app.listen(configService.get('APP_PORT'));
}
bootstrap();
