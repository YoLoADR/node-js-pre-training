import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { AppService } from './app.service';

// Défi : Créez un contrôleur qui gère les routes spécifiques aux opérations CRUD sur les tâches.
// Explication simplifiée : Ce contrôleur sert de point d'entrée pour les requêtes HTTP liées aux tâches (todos). En utilisant différents décorateurs (@Get, @Post, etc.), on définit comment chaque action est gérée.

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Controller('todos')
export class AppController {
  constructor(private readonly appService: AppService) { }

  // Défi : Fournissez une méthode pour obtenir toutes les tâches existantes.
  // Explication simplifiée : `findAll` utilise @Get pour récupérer et retourner toutes les tâches depuis le service.
  @Get()
  findAll(): Todo[] {
    return this.appService.findAll();
  }

  // Défi : Mettez en place une route qui permet de créer une nouvelle tâche à partir d'un titre.
  // Explication simplifiée : `create` prend un titre du corps de la requête et crée une nouvelle tâche grâce au service.
  @Post()
  create(@Body('title') title: string): Todo {
    return this.appService.create(title);
  }

  // Défi : Ajoutez une fonctionnalité pour mettre à jour une tâche existante par son ID.
  // Explication simplifiée : `update` permet de modifier une tâche spécifiée par l'ID dans l'URL. Les nouvelles valeurs sont prises du corps de la requête.
  @Put(':id')
  update(@Param('id') id: string, @Body('title') title: string, @Body('completed') completed: boolean): Todo | undefined {
    return this.appService.update(+id, title, completed);
  }

  // Défi : Implémentez une route pour supprimer une tâche en utilisant son ID.
  // Explication simplifiée : `delete` supprime la tâche correspondant à l'ID fourni et retourne un résultat basé sur le succès de l'opération.
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.appService.delete(+id);
  }
}
