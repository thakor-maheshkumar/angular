import { Component, OnInit } from '@angular/core';
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
  user: User | undefined;

  constructor(  private route: ActivatedRoute,
    private userService: UserService,
    private location: Location) { }
    @Input() hero?: Hero;

  ngOnInit(): void {
    this.getUser();
  }
  getUser():void {
      const id= Number(this.route.snapshot.paramMap.get('id'));
      this.userService.getUser(id)
      .subscribe(user=> this.user =user)
  }

}
// import { Component, OnInit,Input } from '@angular/core';

// import { Hero } from '../hero';

// import { HEROES } from '../mock-heroes';
// import { ActivatedRoute } from '@angular/router';
// import { Location } from '@angular/common';

// import { HeroService } from '../hero.service';
// @Component({
//   selector: 'app-hero-detail',
//   templateUrl: './hero-detail.component.html',
//   styleUrls: ['./hero-detail.component.css']
// })
// export class HeroDetailComponent implements OnInit {

//   constructor(private route: ActivatedRoute,
//     private heroService: HeroService,
//     private location: Location) { }

//   @Input() hero?: Hero;
//   ngOnInit(): void {
//     this.getHero();
//   }
//   getHero(): void {
//     const id = Number(this.route.snapshot.paramMap.get('id'));
//     this.heroService.getHero(id)
//       .subscribe(hero => this.hero = hero);
//   }
//   goBack(): void {
//     this.location.back();
//   }
// }