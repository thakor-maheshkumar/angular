import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Asha' },
      { id: 13, name: 'Mamata' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr. IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ];
    const users = [
      { id: 12, name: 'Dr. Asha',email:'asha@gmail.com' },
      { id: 13, name: 'Mamata',email:'mamata@gmail.com' },
      { id: 14, name: 'Celeritas',email:'cp@gmail.com' },
      { id: 15, name: 'Magneta',email:'gp@gmail.com' },
      { id: 16, name: 'RubberMan',email:'rm@gmail.com' },
      { id: 17, name: 'Dynama',email:'dy@gmail.com' },
      { id: 18, name: 'Dr. IQ',email:'iq@g.com' },
      { id: 19, name: 'Magma' ,email:'mg@g.com'},
      { id: 20, name: 'Tornado',email:'td@g.com' }
    ];
    return {heroes};
    //return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  genUserId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  
}
