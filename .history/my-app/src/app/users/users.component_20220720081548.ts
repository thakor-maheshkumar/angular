import { Component, OnInit } from '@angular/core';
import { User } from '../user';

// import { USERS } from '../mock-users';

import { UserService } from '../user.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:User[] = [];
  constructor(private userService:UserService) {}
  
 
  selectedUser?:User;
  
  
  onSelect(user:User): void{
    this.selectedUser=user;
  }
}
