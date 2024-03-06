import { Injectable } from '@nestjs/common';

// Défi : Implémentez une classe de service qui peut être injectée dans d'autres parties de l'application NestJS.
// Explication simplifiée : `@Injectable()` marque cette classe comme pouvant être injectée avec la logique métier, ici la gestion d'une liste de tâches (todos).

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

@Injectable()
export class AppService {
  // Défi : Initialisez et gérez une liste de todos en utilisant une propriété de classe.
  // Explication simplifiée : Utilisez `private readonly` pour sécuriser la liste de todos, permettant seulement sa modification à travers les méthodes de cette classe.
  private readonly todos: Todo[] = [
    { id: 1, title: 'Acheter du lait', completed: false },
    { id: 2, title: 'Répondre aux emails', completed: true }];

  // Défi : Créez une méthode qui retourne tous les todos existants.
  // Explication simplifiée : `findAll` doit retourner chaque todo stocké, permettant à l'utilisateur de voir toutes ses tâches.
  findAll(): Todo[] {
    return this.todos;
  }

  // Défi : Développez une méthode pour ajouter un nouveau todo basé sur un titre donné.
  // Explication simplifiée : `create` crée un nouveau todo avec un identifiant unique, le titre reçu en paramètre et un état non complété, puis l'ajoute à la liste.
  create(title: string): Todo {
    const newTodo: Todo = { id: Date.now(), title, completed: false };
    this.todos.push(newTodo);
    return newTodo;
  }

  // Défi : Mettez en place une méthode pour mettre à jour un todo existant avec un nouvel état et/ou titre.
  // Explication simplifiée : `update` cherche un todo par son ID et, si trouvé, le met à jour avec les nouvelles informations fournies avant de le retourner.
  update(id: number, title: string, completed: boolean): Todo | undefined {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
      const updatedTodo = { ...this.todos[todoIndex], title, completed };
      this.todos[todoIndex] = updatedTodo;
      return updatedTodo;
    }
    return undefined;
  }

  // Défi : Implementez une fonction pour supprimer un todo à partir de son identifiant.
  // Explication simplifiée : `delete` trouve le todo correspondant à l'ID donné et le retire de la liste, retournant vrai si l'opération est réussie, faux sinon.
  delete(id: number): boolean {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if (todoIndex > -1) {
      this.todos.splice(todoIndex, 1);
      return true;
    }
    return false;
  }
}
