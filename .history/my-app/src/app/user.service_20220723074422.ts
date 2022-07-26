import { Injectable } from '@angular/core';

//import { catchError, Observable, of } from 'rxjs';
import { catchError, map, tap, Observable } from 'rxjs/operators';


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
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
  
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
  
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  getUsers(): Observable<User[]> {
    // const users = of(USERS);
    // this.messageService.add('User service: fetched heroes');
    // return users;
    return this.http.get<User[]>(this.userUrl)
    .pipe(
      tap(_=>this.log('fetched users'))
      catchError(this.handleError<User[]>('getUsers',[]))
    )
  }

}
