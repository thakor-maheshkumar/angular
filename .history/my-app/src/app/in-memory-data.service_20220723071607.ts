import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService  {

  createDb() {
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
    return {users};
    //return {users};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genUserId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(hero => hero.id)) + 1 : 11;
  }
  
}
