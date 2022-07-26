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
  getUser(id:number) : Observable<User>{

  }
}
