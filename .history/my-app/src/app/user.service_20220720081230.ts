import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


import { User } from './user';

import { USERS } from './mock-users';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private messageService: MessageService) { }

  getUser(id: number): Observable<User> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const hero = USERS.find(h => h.id === id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(hero);
  }
  getHeroes(): Observable<User[]> {
    const users = of(USERS);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

}
