import { Component, OnInit,Input } from '@angular/core';
import { User } from '../user';
import { USERS } from '../mock-users';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../user.service';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor(  private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }
    @Input() user?: User;

  ngOnInit(): void {
    this.getUser();
  }
  getUser():void {
      const id= Number(this.route.snapshot.paramMap.get('id'));
      this.userService.getUser(id)
      .subscribe(user=> this.user =user)
  }

}
