import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';


import { User } from './user';

import { USERS } from './mock-users';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers(): User[]{
    return USERS
  }
  getHero(id: number): Observable<User> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const user = USERS.find(h => h.id === id)!;
    
    return of(user);
  }
}
