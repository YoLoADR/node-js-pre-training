import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// Explication : AppModule assemble l'application. Il dit à NestJS quels contrôleurs et services sont utilisés, permettant à NestJS de gérer l'injection de dépendances et l'organisation de l'application.

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
