import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-userdetail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserdetailComponent implements OnInit {

  constructor( private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location) { }

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
      
  }
  ngOnInit(): void {
  }

}
