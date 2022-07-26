import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from './user';

import { USERS } from './mock-users';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient,
    private messageService: MessageService) { }
    private userUrl='api/users';
  getUser(id: number): Observable<User> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const user = USERS.find(h => h.id === id)!;
    this.messageService.add(`User: fetched user id=${id}`);
    return of(user);
  }
  getUsers(): Observable<User[]> {
    // const users = of(USERS);
    // this.messageService.add('User service: fetched heroes');
    // return users;
    return this.http.get<User[]>(this.userUrl)
  }

}
