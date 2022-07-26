import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { User } from '../user';
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

  ngOnInit(): void {
    this.getUser();
  }
  getUser:void {
    
  }

}
