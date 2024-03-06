import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

// Explication : main.ts est le point d'entrée de l'application. Il crée une instance de l'application NestJS en utilisant AppModule et démarre l'écoute des requêtes entrantes.

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3011);
}
bootstrap();
