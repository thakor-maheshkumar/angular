import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor() { }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
      .subscribe(hero => this.hero = hero);
  }
  ngOnInit(): void {
  }

}
