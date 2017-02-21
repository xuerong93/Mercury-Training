import { Component } from '@angular/core';
// import { OnInit} from "@angular/core";
// import { Hero } from './vo/hero';
// import { HeroService } from "./service/hero.service"


@Component({
  selector: 'my-app',  //element directive
  moduleId: module.id, //use relative path instead of absolute path
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a routerLink = "/dashboard">Dashboard</a>
      <a routerLink = "/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  
  // templateUrl: "./template/heroes.component.html",
   styleUrls : ["./css/app.component.css"]
  // providers: [HeroService]
})
export class AppComponent { 
    title = "Title of Heroes";
    // hero: Hero = {
    //   id: 1,
    //   name: "windstorm"
    // };
    // heroes : Hero[]; 
    // selectedHero: Hero;


    // onSelect (hero: Hero) : void {
    //   this.selectedHero = hero;
    // }

    // constructor(private heroService: HeroService){    //heroService is an object, the instance of HeroService

    // }

    // ngOnInit(): void{
    //   this.heroService.getHeroes().then(heroes => this.heroes = heroes);  //avoid the getHeroes() return promise
    //   //=> Arrow operation 
    // }
}