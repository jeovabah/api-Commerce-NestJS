import { RequestMethod } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // how to disable CORS
  app.enableCors({
    origin: 'http://localhost:3001',
    credentials: false,
  });
  await app.listen(3000);
}
bootstrap();
